
var sequelize = require('../connection/connection')

var Item = sequelize.define('Item', {
    id: { type: Sequelize.STRING, primaryKey: true },
    studentname: Sequelize.STRING,
    description: Sequelize.STRING,
    qty: Sequelize.INTEGER
});

sequelize.sync({ force: true }).then(function (err) {
    if (err) {
        console.log('An error occur while creating table');
    } else {
        console.log('Item table created successfully');
    }
});

module.exports.models.Item = Item;