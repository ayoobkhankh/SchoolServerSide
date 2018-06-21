var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/test', function (req, res, next) {
    models.shops.findAll().then(function (shops) {
        res.json({ worked: shops })
    })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {

});

module.exports = router;