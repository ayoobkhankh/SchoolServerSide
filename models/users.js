'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING },
        token: { type: Sequelize.STRING }
    }, {
        });

    users.associate = function (models) {
        // associations can be defined here
    };

    users.hook('beforeCreate', (users, options) => {
        // options.individualHooks = true;
        // var password = users.password;
        // var saltRounds = 10;
        // var hashedPassword;

        // function hashpassword(password) {
        //     var hashedpassword;
        //     bcrypt.hash(password, 10, function (err, result) {
        //         if (err) console.log(err);
        //         hashedpassword = result;
        //         return;
        //     });
        //     return hashedpassword;
        // }
        // users.password = hashedPassword;
        // .then(hashedPassword => {
        //     users.password = 'sasi';
        //     console.log(users.password);
        // })
        // var hashedpassword = hashpassword(password)
        var beforehash = users.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(beforehash, salt);
        users.password = hash;
    });

    // async function hashpassword(input) {
    //     const password = input;
    //     const saltRounds = 10;

    //     await bcrypt 
    //         .hash(password, saltRounds)
    //         .then(hashedPassword => {
    //             console.log("hash", hashedPassword);
    //             return hashedPassword;
    //         })
    // }

    return users;
};