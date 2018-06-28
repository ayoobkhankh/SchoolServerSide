'use strict';
module.exports = (sequelize, DataTypes) => {
    var customers = sequelize.define('customers', {
        CustName: DataTypes.STRING,
        CustAddress: DataTypes.STRING,
        CustPlace: DataTypes.STRING,
        CustContactPerson: DataTypes.STRING,
        CustContactNo: DataTypes.STRING,
        CustType: DataTypes.STRING
    }, {});
    customers.associate = function (models) {
        // associations can be defined here
    };
    return customers;
}; 