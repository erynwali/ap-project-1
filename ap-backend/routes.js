// imports

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');
const Product = require('./models/Product');
const PORT = 3080;

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "143028299259-vbsfm4q97b8gqaah7a8oo1jtm6v5demv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;

// connect to server

mongoose.connect('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/testdb?retryWrites=true&w=majority',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
() => {
  console.log("Users Database (MongoDB) is now connected to Port:", PORT);
});

app.use('/', express.static(path.resolve(__dirname)));

app.use(bodyParser.json());


//-----------------------------------------------------------------------------

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://www.example.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User does not exist!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully logged in!");
        //console.log(req.user);
      });
    }
  })(req, res, next);
});

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// routes for users
app.post('/addUser', async (req, res) => {
    const record = req.body;

    const response = await User.create(record);

    console.log(response);

    res.json({ status: 'ok' });
});

app.post('/removeUser', async (req, res) => {
    const record = req.body;

    console.log('101010', record, '/removeUser');

    const response = await User.deleteOne({ record });

	console.log(response, '/removeUser repsonse');

	res.json({ status: 'ok' });
});

app.get('/getUsers', async (req, res) => {
	const records = await User.find({});
	console.log('Response => ', records);
	res.json(records);
});

// update User details

app.post('/update/email', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {email: record.email} );

  console.log(response);

  res.json({ status: 'ok' });
});

app.post('/update/address', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {email: record.address} );

  console.log(response);

  res.json({ status: 'ok' });
});

// routes for cart

app.post('/addToCart', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$push: { cart: {product_id: record.product_id, quantity: record.quantity }}});

  console.log(response);

  res.json({ status: 'ok' });
});

app.post('/removeFromCart', async (req, res) => {
  const record = req.body;

  console.log('/removeProduct');

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$pull: { cart: { product_id: record.product_id }}});

console.log(response, 'item removed from cart')

res.json({ status: 'ok' });
});

app.get('/getCart', async (req, res) => {
  const record = req.body;

  const response = await User.findOne(
      {_id: record._id});

  console.log(response);

  res.json(respons.cart);
});

// routes for wishlist

app.post('/addToWishlist', async (req, res) => {
  const record = req.body;

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$push: { wishlist: {product_id: record.product_id, quantity: record.quantity }}});

  console.log(response);

  res.json({ status: 'ok' });
});

app.post('/removeFromWishlist', async (req, res) => {
  const record = req.body;

  console.log(record, '/removeProduct');

  const response = await User.findOneAndUpdate(
      {_id: record._id}, 
      {$pull: { wishlist: { product_id: record.product_id }}});

console.log(response, 'item removed from wishlist');

res.json({ status: 'ok' });
});

app.get('/getWishlist', async (req, res) => {
  const record = req.body;

  const response = await User.findOne(
      {_id: record._id});

  console.log(response);

  res.json(response.wishlist);
});


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// routes for products

app.post('/addProduct', async (req, res) => {
    const record = req.body;

    const response = await Product.create(record);

    console.log(response);

    res.json({ status: 'ok' });
});

app.post('/removeProduct', async (req, res) => {
    const record = req.body;

    console.log(record, '/removeProduct');

    const response = await Product.deleteOne({ record });

	console.log(response, 'removed Product');

	res.json({ status: 'ok' });
});

app.get('/getProduct', async (req, res) => {
	const records = await Product.find({});
	console.log('Response => ', records);
	res.json(records);
});

// Routes to change product details

app.post('/changePrice', async (req, res) => {
  const record = req.body;

  const response = await Product.findOneAndUpdate(
      {_id: record._id}, 
      {price: record.age} );

  console.log(response);

  res.json({ status: 'ok' })
});


// Routes for search

//Search by term
app.get('/search/ByTerm', async (req, res) => {
  const term = req.body.term;

  Product.find(
    {$or: [{name: {$regex: term, $options: '<i>'}} , {category : {$regex: term, $options: '<i>'}}]}
    );

});

// Search by gender

app.get('/search/ByGender', async (req, res) => {
  const gender = req.body.gender;

  Product.find({gender: gender});
    
  });

// Search by category

app.get('/search/ByCategory', async (req, res) => {
  const gender = req.body.gender;
  const category = req.body.category

  Product.find({$and: [ {gender: {$regex: gender}} , {category : {$regex: term, $options: '<i>'}} ] });

});

// Server up

app.listen(PORT, '127.0.0.1', () => {
	console.log('Server up');
});
