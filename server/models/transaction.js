/*
 * Transaction Model for In2Indie
 *
 */

var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define('Transaction', 
        {
            transaction_id: 
                
                {
                    type          : DataTypes.UUID,
                    primaryKey    : true,
                    allowNull     : false
                },
            user_id:
                {
                    type          : DataTypes.UUID,
                    references    : models.user.user_id,
                    referencesKey : "id"
                },
            product_id:
                {
                    type          : DataTypes.UUID,
                    references    : models.product.product_id,
                    referencesKey : "id"
                }
        },

        {
            classMethods: {
                associate: function (models) {
                    Transaction.hasOne(models.user),
                    Transaction.hasMany(models.product)
                }
            }
        })

    return Transaction
}