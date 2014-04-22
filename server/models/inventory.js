/*
 * Inventory Model for In2Indie
 *
 */


module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define('Inventory', 
        {
            product_name      : DataTypes.STRING,
            product_id        : 
                
                {
                    type      : DataTypes.UUID,
                    primaryKey: true,
                    allowNull : false
                },
            product_available : DataTypes.BOOLEAN
        }, 

    /*{
        classMethods: {
            associate: function (models) {
                Product.hasMany(models.Task)
            }
        }*/
    })

    return Inventory
}