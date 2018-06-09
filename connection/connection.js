var Sequelize = require('sequelize');

var sequelize = new Sequelize('testdb', 'root', 'Moveon@786', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: { socketPath: '/var/run/mysqld/mysqld.sock' }
});

sequelize.authenticate().then(function (err) {
    if (err) {
        console.log('There is connection in ERROR');
    } else {
        console.log('Connection has been established successfully');
    }
});

module.exports.sequelize = sequelize;