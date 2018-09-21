var express = require('express');
var router = express.Router();
var models = require('../models');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/create', function (req, res, next) {
  models.users.create({
    username: req.param('username'),
    email: req.param('email'),
    password: hashpassword(req.param('password')),
    token: req.param('token')
  }).then(function (users) {
    res.json({ "message": "Customer details saved" })
  }).catch(function (err) {
    res.json({ "message": "An error occured!" })
  })
});

async function hashpassword(input) {
  const password = input;
  const saltRounds = 10;

  bcrypt
    .hash(password, saltRounds)
    .then(hashedPassword => {
      console.log("hash", hashedPassword);
      return hashedPassword;
    })

}

// async function hashpassword(data) {

//   var password = data;
//   var saltRounds = 11;

//   var hashedPassword = await new Promise((resolve, reject) => {
//     bcrypt.hash(password, saltRounds, function (err, hash) {
//       if (err) reject(err)
//       resolve(hash)
//     });
//   })
//   console.log(hashedPassword);
//   return hashedPassword
// }

// function hashpassword(data) {
//   var hashedpassword;
//   bcrypt.genSalt(11, function (err, salt) {
//     if (err) console.log(err);
//     bcrypt.hash(data, salt, function (err, result) {
//       if (err) console.log(err);
//       hashedpassword = result;
//       console.log(result);
//     })
//     return hashedpassword;
//   })

// }

// hashpassword('Ayoob');

// router.post('/upsert', function (req, res, next) {
//   models.customers.upsert({
//     id: parseInt(req.body.id),
//     CustName: req.body.CustName,
//     CustAddress: req.body.CustAddress,
//     CustPlace: req.body.CustPlace,
//     CustContactPerson: req.body.CustContactPerson,
//     CustContactNo: req.body.CustContactNo,
//     CustType: req.body.CustType
//   })
//     .then(function (customers) {
//       res.json({ "message": "Created" })
//     })
//   // jwt.sign({ user: user }, 'secretkey', (err, token) => {}

// });

// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
