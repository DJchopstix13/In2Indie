/*
 * Product Model for In2Indie
 *
 */

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define('Product', 
        {
            product_name         : DataTypes.STRING,
            product_type: 
                {
                    type         : DataTypes.STRING,
                    values       : ['games', 'movies', 'music']
                },
            product_id: 
                
                {
                    type         : DataTypes.UUID,
                    primaryKey   : true,
                    allowNull    : false
                },
            product_price        : DataTypes.DECIMAL,
            product_available: 
                {
                    type         : DataTypes.BOOLEAN,
                    allowNull    : false,
                    referenes    : models.inventory.product_available,
                    referenesKey : "id"
                }
        }, 

        {
            classMethods: {
                associate: function (models) {
                    Product.hasMany(models.inventory),
                    Product.hasOne(models.transaction)
                }
            }
        })

    return Product
}