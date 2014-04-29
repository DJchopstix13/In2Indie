/*
 * Inventory Model for In2Indie
 *
 */

var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var INVENTORY = sequelize.define('INVENTORY', 
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

                },
            product_available    : 
                {
                    type         : DataTypes.BOOLEAN,
                    allowNull    : false,
                    primaryKey   : true
                }
        },

        {
            classMethods: {
                associate: function (models) {
                    INVENTORY.belongsTo(models.Transaction,
                        {
                            as         : "transaction_id_fk",
                            constraints: false
                        }),
                    INVENTORY.hasMany(models.Product)
                }
            }
        })

    return INVENTORY
}