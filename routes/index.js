var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.send('<h1>Va alaikumussalam.</h1>'))
/* GET home page. */
// router.get('/', function (req, res, next) {
//   // models.products.findAll().then(function (products) {
//   res.send('Hi');
//   // });
// });

module.exports = router;
