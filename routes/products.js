var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var models = require('../models');

function verifyToken(req, res, next) {
    var bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== undefined) {
        try {
            // const decode = jwt.verify(bearerHeader, 'secretkey')
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            // console.log(bearerToken);
            next()
        } catch (err) {
            res.sendStatus(403)
        }
    } else {
        res.sendStatus(403)
    }
}

router.post('/tryjwt', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            res.json({ message: 'Its done', authData });
        }
    })

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