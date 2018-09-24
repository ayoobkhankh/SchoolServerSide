var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

router.post('/create', function (req, res, next) {
  models.users.create({
    username: req.param('username'),
    email: req.param('email'),
    password: req.param('password'),
    token: req.param('token')
  }, {
      individualHooks: true
    }).then(function (users) {
      res.json({ "message": "Customer details saved" })
    }).catch(function (err) {
      res.json({ "message": "An error occured!" })
    })
});

router.post('/login', async function (req, res, next) {
  models.users.findOne({
    attributes: ['username', 'id', 'password'],
    where: {
      username: req.param('username')
    }
  }).then(function (result) {
    if (!result) {
      return res.json({ message: "Invalid Username" });
    }
    var hashedPassword = bcrypt.compareSync(
      req.param('password'),
      result.password
    );
    if (hashedPassword === false) {
      return res.json({ message: "Invalid Password" });
    }
    jwt.sign({ username: req.param('username') }, 'secretkey', (err, token) => {
      // res.json({ token: token })
      return res.json({ message: token });
    });
  })
})

module.exports = router;
