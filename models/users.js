'use strict';

var Sequelize = require('sequelize');

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

    // users.hook('beforeCreate', (users, options) => {
    //     // users.password = 'patti';
    //     var input = users.password;
    //     var output;
    //     bcrypt.genSalt(11, function (err, salt) {
    //         if (err) console.log(err);
    //         bcrypt.hash(input, salt, function (err, result) {
    //             if (err) console.log(err);
    //             // console.log(result);
    //             output = result;
    //         })
    //     })
    // });


    return users;
};