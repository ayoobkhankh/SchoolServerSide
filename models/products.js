'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    ProductName: DataTypes.STRING,
    ProductDesc: DataTypes.STRING,
    MeasureUnit: DataTypes.STRING,
    MeasureUnitShort: DataTypes.STRING,
    TaxCatagoryID: DataTypes.INTEGER,
    PricePerUnit: DataTypes.DECIMAL
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};