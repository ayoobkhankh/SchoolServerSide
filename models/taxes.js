'use strict';
module.exports = (sequelize, DataTypes) => {
    var taxes = sequelize.define('taxes', {
        TaxName: DataTypes.STRING,
        SGSTRate: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
        CGSTRate: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
        IGSTRate: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
        CESSRate: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isDecimal: true
            }
        },
    }, {});
    taxes.associate = function (models) {
        // associations can be defined here
    };
    return taxes;
};