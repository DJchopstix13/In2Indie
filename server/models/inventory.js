/*
 * Inventory Model for In2Indie
 *
 */

var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define('Inventory', 
        {
            product_id           : 
                {
                    type         : DataTypes.UUID,
                    allowNull    : false,
                    references   : models.Product,
                    referencesKey: "product_id"

                },
            transaction_id       : 
                {
                    type         : DataTypes.UUID,
                    allowNull    : false,
                    references   : models.Transaction,
                    referencesKey: "transaction_id"

                },
            product_available    : 
                {
                    type         : DataTypes.BOOLEAN,
                    allowNull    : false,
                    primaryKey  : true
                }
        },

        {
            classMethods: {
                associate: function (models) {
                    Inventory.belongsTo(models.Transaction),
                    Inventory.hasOne(models.Product)
                }
            }
        })

    return Inventory
}