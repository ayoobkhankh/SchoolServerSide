'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    ProductName: DataTypes.STRING,
    ProductType: DataTypes.STRING
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};