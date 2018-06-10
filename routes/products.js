var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var models = require('../models');

function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {

    } else {
        res.sendStatus(403)
    }
}

router.post('/tryjwt', verifyToken, (req, res, next) => {
    res.send('It worked');
});

router.get('/login', function (req, res, next) {
    const user = {
        id: 1,
        usename: 'ayoob',
        email: 'ayoob@gmail.com'
    }
    jwt.sign({ user: user }, 'secretkey', (err, token) => {
        res.json({ token: token })
    });
});

module.exports = router;