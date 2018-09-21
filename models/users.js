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

    // function cryptPassword(password, callback) {
    //     bcrypt.genSalt(10, function (err, salt) { // Encrypt password using bycrpt module
    //         if (err)
    //             return callback(err);

    //         bcrypt.hash(password, salt, function (err, hash) {
    //             return callback(err, hash);
    //         });
    //     });
    // }
    // users.beforeCreate(function hashpassword() {
    //     bcrypt.genSalt(11, function (err, salt) {
    //         if (err) console.log(err);
    //         bcrypt.hash('Ayoob', salt, function (err, result) {
    //             if (err) console.log(err);
    //             users.password = result;
    //         })
    //     })
    // })

    // users.beforeCreate(function (users, options, cb) {
    //     debug('Info: ' + 'Storing the password');
    //     cryptPassword(users.password, function (err, hash) {
    //         if (err) return cb(err);
    //         debug('Info: ' + 'getting ' + hash);

    //         users.password = hash;
    //         return cb(null, options);
    //     });
    // });

    users.associate = function (models) {
        // associations can be defined here
    };

    return users;
};