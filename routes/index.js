var express = require('express');
var router = express.Router();
// var jwt = require('jsonwebtoken');
var models = require('../models');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/', (req, res) => res.send('<h1>Va alaikumussalam.</h1>'))
/* GET home page. */
router.post('/', function (req, res, next) {
  // models.products.findAll().then(function (products) {
  //   res.send(products);
  // });

  models.products.create({ ProductName: req.param('ProductName'), ProductType: req.param('ProductType') }).then(newproducts => {
    res.json(newproducts);
  })

});

module.exports = router;
