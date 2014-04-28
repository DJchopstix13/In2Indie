/*
 * Inventory Model for In2Indie
 *
 */


module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define('Inventory', 
        {
            product_id           : 
                {
                    type         : DataTypes.UUID,
                    allowNull    : false,
                    references   : models.product.product_id,
                    referencesKey: "id"

                },
            transaction_id       : 
                {
                    type         : DataTypes.UUID,
                    allowNull    : false,
                    references   : models.transaction.transaction_id,
                    referencesKey: "id"

                },
            product_available    : 
                {
                    type         : DataTypes.BOOLEAN,
                    allowNull    : false,
                    primaryKey:  : true
                }
        },

        {
            classMethods: {
                associate: function (models) {
                    Inventory.hasOne(models.transaction),
                    Inventory.hasOne(models.product)
                }
            }
        })

    return Inventory
}