const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // _id: { type: String, required: true},
	name: { type: String, required: true },
	date: {
		type: Number,
		default: Date.now
	},

	age: {type: String},
	email: {type: String},
    addresses: [
        {
            line1: {type: String},
            line2: {type: String},
            city: {type: String},
            state: {type: String},
            country: {type: String},
            pincode: {type: String}
        }
    ],
    cart: [
        {
            product_id: {type: String},
            quantity: {type: String}
        }
    ],

    wishlist: [
        {
            product_id: {type: String},
            quantity: {type: String}
        }
    ]
    


}, 
{ collection: 'Users2'}
)

const model = mongoose.model('UserModel', UserSchema)

module.exports = model
