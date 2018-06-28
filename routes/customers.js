var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/SendList', function (req, res, next) {
    models.customers.findAll({ attributes: ['id', 'CustName', 'CustAddress', 'CustPlace', 'CustContactPerson', 'CustContactNo', 'CustType'] }).then(function (customers) {
        res.json(customers)
    })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {

});

router.post('/upsert', function (req, res, next) {
    models.customers.upsert({
        id: req.body.ShopName,
        CustName: req.body.CustName,
        CustAddress: req.body.CustAddress,
        CustPlace: req.body.CustPlace,
        CustContactPerson: req.body.CustContactPerson,
        CustContactNo: req.body.CustContactNo,
        CustType: req.body.CustType
    })
        .then(function (customers) {
            res.json({ worked: customers.dataValues })
        })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {}

});

module.exports = router;
