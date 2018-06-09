var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', (req, res) => res.send('<h1>Va alaikumussalam.</h1>'))
/* GET home page. */
// router.get('/', function (req, res, next) {
//   // models.products.findAll().then(function (products) {
//   res.send('Hi');
//   // });
// });

module.exports = router;
