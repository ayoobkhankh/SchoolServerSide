'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    Id: { type: DataTypes.STRING, primaryKey: true },
    ProductName: DataTypes.STRING,
    ProductType: DataTypes.STRING
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};