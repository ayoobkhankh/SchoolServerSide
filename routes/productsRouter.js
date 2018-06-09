var express = require("express");

var Sequelize = require('sequelize');

var router = express.Router();

router.get('/', (req, res) => res.send('<h1>Va alaikumussalam.</h1>'))

router.get('/anotherone', (req, res) => res.send('<h1>anotherone</h1>'))

module.exports = router;