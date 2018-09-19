'use strict';
const bcrypt = require('bcrypt');
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        username: { type: Sequelize.STRING, unique: true },
        email: { type: Sequelize.STRING, unique: true },
        password: DataTypes.STRING,
        token: Sequelize.STRING
    }, {});
    users.associate = function (models) {
        // associations can be defined here
    };

    // users.hook('beforeCreate', async function (next) {
    //     const hash = await bcrypt.hash(this.password, 10);
    //     this.password = hash;
    //     next();
    // })
    // return users;
};