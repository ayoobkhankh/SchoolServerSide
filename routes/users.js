var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

/* GET users listing. */
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

router.post('/login', function (req, res, next) {
  try {
    const foundUser = models.users.findOne({
      where: { username: req.param('username') },
    })
    if (foundUser.rows.length === 0) {
      return res.json({ message: "Invalid Username" });
    }
    const hashedPassword = bcrypt.compare(
      req.param('username'),
      foundUser.rows[0].password
    );
    if (hashedPassword === false) {
      return res.json({ message: "Invalid Password" });
    }
    return res.json({ message: "Logged In!" });
  } catch (e) {
    return res.json(e);
  }
});

module.exports = router;
