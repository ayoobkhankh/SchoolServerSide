'use strict';
const bcrypt = require('bcrypt');
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING, unique: true },
        email: { type: Sequelize.STRING, unique: true },
        password: DataTypes.STRING,
        token: Sequelize.STRING
    }, {
            freezeTableName: true,
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(8));
                },
                validPassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        });
    users.associate = function (models) {
        // associations can be defined here
    };

    return users;
};