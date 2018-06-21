var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/test', function (req, res, next) {
    const user = {
        id: 1,
        usename: 'ayoob',
        email: 'ayoob@gmail.com'
    }
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {
    res.json({ worked: "token" })
});

module.exports = router;