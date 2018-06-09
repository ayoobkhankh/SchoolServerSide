'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    Name: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};