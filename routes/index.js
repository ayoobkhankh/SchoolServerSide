var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  models.products.findAll().then(function (products) {
    res.send(products);
  });
});

module.exports = router;
