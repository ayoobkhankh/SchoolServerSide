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

router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      username: req.param('username')
    }
  }).then(function (result) {
    // if (result.rows.length === 0) {
    //   return res.json({ message: "Invalid Username" });
    // }
    res.json(result.rows.length);
  })
})
// if (foundUser.rows.length === 0) {
//   return res.json({ message: "Invalid Username" });
// }
// const hashedPassword = bcrypt.compare(
//   req.params('username'),
//   foundUser.rows[0].password
// );
// if (hashedPassword === false) {
//   return res.json({ message: "Invalid Password" });
// }
//   console.log(foundUser);
//   return res.json({ message: "foundUser" });
//   // return res.json({ message: "Logged In!" });
// } catch (e) {
//   return res.json(e);
// }


module.exports = router;
