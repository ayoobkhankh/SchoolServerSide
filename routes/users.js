var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/create', function (req, res, next) {
  models.users.create({
    username: req.params('username'),
    email: req.params('email'),
    password: req.params('password'),
    token: req.params('token')
  }, {
      individualHooks: true
    }).then(function (users) {
      res.json({ "message": "Customer details saved" })
    }).catch(function (err) {
      res.json({ "message": "An error occured!" })
    })
});

router.post('/login', async function (req, res, next) {
  models.users.findOne({
    attributes: ['username', 'id', 'password'],
    where: {
      username: req.param('username')
    }
  }).then(function (result) {
    if (!result) {
      return res.json({ message: "Invalid Username" });
    }
    // console.log(result);
    // res.json(result);
    const hashedPassword = bcrypt.compare(
      req.param('username'),
      result.password
    );
    if (hashedPassword === false) {
      return res.json({ message: "Invalid Password" });
    }
    return res.json({ message: "Logged In" });
    // return res.json({ message: "Logged In!" });

  })
})

//   return res.json({ message: "foundUser" });
//   // return res.json({ message: "Logged In!" });
// } catch (e) {
//   return res.json(e);
// }


module.exports = router;
