/*
 * Product Model for In2Indie
 *
 */

 var models = require('../models/');

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
                    type         : DataTypes.STRING,
                    primaryKey   : true,
                    //allowNull    : false
                },
            product_price        : DataTypes.DECIMAL,
            product_available: 
                {
                    type         : DataTypes.BOOLEAN,
                    //allowNull    : false,
                    referenes    : models.Inventory,
                    referenesKey : "product_available"
                }
        }, 

        {
            classMethods: {
                associate: function (models) {
                    //Product.belongsTo(models.Inventory),
                    Product.hasOne(models.Transaction)
                }
            }
        })

    return Product
}