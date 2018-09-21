'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: DataTypes.STRING,
        token: Sequelize.STRING
    }, {
        });

    users.associate = function (models) {
        // associations can be defined here
    };

    users.hook('beforeCreate', (users, options) => {
        var password = users.password;
        var saltRounds = 10;
        console.log(password)
        await bcrypt
            .hash(password, saltRounds)
            .then(hashedPassword => {
                users.password = hashedPassword;
                console.log(users.password);
            })
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