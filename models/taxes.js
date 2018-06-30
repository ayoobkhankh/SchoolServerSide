'use strict';
module.exports = (sequelize, DataTypes) => {
    var taxes = sequelize.define('taxes', {
        TaxName: DataTypes.STRING,
        SGSTRate: DataTypes.DECIMAL,
        CGSTRate: DataTypes.DECIMAL,
        IGSTRate: DataTypes.DECIMAL,
        CESSRate: DataTypes.DECIMAL
    }, {});
    taxes.associate = function (models) {
        // associations can be defined here
    };
    return taxes;
};