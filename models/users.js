'use strict';

var Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: DataTypes.STRING,
        token: Sequelize.STRING
    }, {
            beforeCreate: function (values, next) {
                bcrypt.genSalt(11, function (err, salt) {
                    if (err) console.log(err);
                    bcrypt.hash(values.password, salt, function (err, result) {
                        if (err) console.log(err);
                        console.log(result);
                        values.password = result;
                        next();
                    })
                })
            }
        });

    users.associate = function (models) {
        // associations can be defined here
    };

    return users;
};