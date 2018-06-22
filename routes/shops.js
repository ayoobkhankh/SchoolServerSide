var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/test', function (req, res, next) {
    models.shops.findAll().then(function (shops) {
        res.json(shops)
    })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {

});

router.post('/insert', function (req, res, next) {
    models.shops.create({
        ShopName: req.body.ShopName,
        ShopAddress: req.body.ShopAddress,
        ShopPlace: req.body.ShopPlace,
        ShopContactPerson: req.body.ShopContactPerson,
        ShopContactNo: req.body.ShopContactNo,
        ShopType: req.body.ShopType
    })
        .then(function (shops) {
            res.json({ worked: shops.dataValues })
        })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {}

});

module.exports = router;
