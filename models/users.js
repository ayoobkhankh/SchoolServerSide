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

    var hashedPassword;

    users.hook('beforeCreate', (users, options) => {
        // options.individualHooks = true;
        var password = users.password;
        var saltRounds = 10;
        // console.log(password)

        bcrypt.hash(password, saltRounds, function (err, result) {
            if (err) console.log(err);
            hashedPassword = result;
            console.log(result);
        });

        users.password = hashedPassword;
        // .then(hashedPassword => {
        //     users.password = 'sasi';
        //     console.log(users.password);
        // })
        // var hashedpassword = hashpassword(password)
        // users.password = hashedpassword;
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