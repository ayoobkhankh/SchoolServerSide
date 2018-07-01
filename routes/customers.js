var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/SendList', function (req, res, next) {
    models.customers.findAll({ attributes: ['id', 'CustName', 'CustAddress', 'CustPlace', 'CustContactPerson', 'CustContactNo', 'CustType'] }).then(function (customers) {
        res.json(customers)
    })
});

router.post('/upsert', function (req, res, next) {
    models.customers.upsert({
        id: parseInt(req.body.id),
        CustName: req.body.CustName,
        CustAddress: req.body.CustAddress,
        CustPlace: req.body.CustPlace,
        CustContactPerson: req.body.CustContactPerson,
        CustContactNo: req.body.CustContactNo,
        CustType: req.body.CustType
    }).then(function (customers) {
        res.json({ "message": "Customer details saved" })
    }).catch(function (err) {
        res.json({ "message": "An error occured!" })
    })
    // jwt.sign({ user: user }, 'secretkey', (err, token) => {}
});



module.exports = router;
