/*
 * Product Model for In2Indie
 *
 */

 var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var PRODUCT = sequelize.define('PRODUCT', 
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
                    referenes    : models.Inventory,
                    referenesKey : "product_available"
                }
        }, 

        {
            classMethods: {
                associate: function (models) {
                    //Product.belongsTo(models.Inventory),
                    PRODUCT.hasOne(models.Transaction)
                }
            }
        })

    return PRODUCT
}