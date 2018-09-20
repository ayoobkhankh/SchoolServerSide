var express = require('express');
var router = express.Router();
var models = require('../models');

const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/create', function (req, res, next) {
  models.users.create({
    username: req.param('username'),
    email: req.param('email'),
    password: req.param('password'),
    token: req.param('token')
  }).then(function (users) {
    res.json({ "message": "Customer details saved" })
  }).catch(function (err) {
    res.json({ "message": "An error occured!" })
  })
});

function hashpassword(password) {
  var salt;
  var hashedpassword;
  bcrypt.genSalt(11, function (err, result) {
    if (err) console.log(err);
    salt = result;
    bcrypt.hash(password, salt, function (err, result) {
      if (err) console.log(err);
      hashedpassword = result;
    })
  })
  return hashedpassword;
}



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
