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
                    type         : DataTypes.STRING,
                    //allowNull    : false,
                    references   : models.Product,
                    referencesKey: "product_id"

                },
            transaction_id       : 
                {
                    type         : DataTypes.STRING,
                    //allowNull    : false,

                },
            product_available    : 
                {
                    type         : DataTypes.BOOLEAN,
                    //allowNull    : false,
                    primaryKey   : true
                }
        },
        
        {
            timestamps: false,
            freezeTableNme: true
        },

        {
            classMethods: {
                associate: function (models) {
                    Inventory.belongsTo(models.Transaction,
                        {
                            as         : "transaction_id_fk",
                            constraints: false
                        }),
                    Inventory.hasMany(models.Product)
                }
            }
        })

    return Inventory
}