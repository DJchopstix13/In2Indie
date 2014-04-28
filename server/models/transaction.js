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
                    references    : models.user,
                    referencesKey : "user_id"
                },
            product_id:
                {
                    type          : DataTypes.UUID,
                    references    : models.product,
                    referencesKey : "product_id"
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