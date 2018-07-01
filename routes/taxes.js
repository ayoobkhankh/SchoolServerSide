var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/SendList', function (req, res, next) {
    models.taxes.findAll().then(function (taxes) {
        res.json(taxes)
    })
});

// router.post('/upsert', function (req, res, next) {
//     models.customers.upsert({
//         id: parseInt(req.body.id),
//         CustName: req.body.CustName,
//         CustAddress: req.body.CustAddress,
//         CustPlace: req.body.CustPlace,
//         CustContactPerson: req.body.CustContactPerson,
//         CustContactNo: req.body.CustContactNo,
//         CustType: req.body.CustType
//     })
//         .then(function (customers) {
//             res.json({ "message": "Created" })
//         })
//     // jwt.sign({ user: user }, 'secretkey', (err, token) => {}

// });

module.exports = router;
