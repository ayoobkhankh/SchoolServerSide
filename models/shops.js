'use strict';
module.exports = (sequelize, DataTypes) => {
    var shops = sequelize.define('shops', {
        ShopName: DataTypes.STRING,
        ShopAddress: DataTypes.STRING,
        ShopPlace: DataTypes.STRING,
        ShopContactNo: DataTypes.STRING,
        ShopType: DataTypes.STRING
    }, {});
    shops.associate = function (models) {
        // associations can be defined here
    };
    return shops;
}; 