'use strict';

var Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: DataTypes.STRING,
        token: Sequelize.STRING
    }, {
            hooks: {
                beforeCreate: function (users, next) {
                    bcrypt.genSalt(11, function (err, salt) {
                        if (err) console.log(err);
                        bcrypt.hash(users.password, salt, function (err, result) {
                            if (err) console.log(err);
                            console.log(result);
                            users.password = result;
                            next();
                        })
                    })
                }
            }
        });

    users.associate = function (models) {
        // associations can be defined here
    };

    return users;
};