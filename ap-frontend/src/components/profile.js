import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Check} from'../util/apis';

// function login(email, password, callback) {
//   const bcrypt = require('bcryptjs');
//   const MongoClient = require('mongodb@3.1.4').MongoClient;
//   const client = new MongoClient('mongodb+srv://asura:asdfg@cluster0.udjat.mongodb.net/testdb?retryWrites=true&w=majority');

//   client.connect(function (err) {
//     if (err) return callback(err);

//     const db = client.db('db-name');
//     const users = db.collection('users');

//     users.findOne({ email: email }, function (err, user) {
//       if (err || !user) {
//         client.close();
//         return callback(err || new WrongUsernameOrPasswordError(email));
//       }

//       bcrypt.compare(password, user.password, function (err, isValid) {
//         client.close();

//         if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));

//         return callback(null, {
//             user_id: user._id.toString(),
//             nickname: user.nickname,
//             email: user.email
//           });
//       });
//     });
//   });
// }

// async function Check() {
//   const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
//   // if (isAuthenticated) {
//       // console.log(input.value, ageinp.value, emailinp.value)
//       // new item(input.value, ageinp.value, emailinp.value, addressinp.value)

//     await fetch('/addUser', {
//         method: 'POST',
//         body: JSON.stringify({ name: user.name, age: user.age, email: user.email }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

    
  
// }


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    Check();
  }
    
  
  

  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/* <p>{user}</p> */}
        {/* <JSONPretty data={user} /> */}
        {JSON.stringify(user, null, 2)}
      </div>
    )
  )
  
}

export default Profile;