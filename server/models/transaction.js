/*
 * Transaction Model for In2Indie
 *
 */

var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var TRANSACTION = sequelize.define('TRANSACTION', 
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
                    references    : models.User,
                    referencesKey : "user_id"
                },
            product_id:
                {
                    type          : DataTypes.UUID,
                    references    : models.Product,
                    referencesKey : "product_id"
                }
        },

        {
            classMethods: {
                associate: function (models) {
                    TRANSACTION.belongsTo(models.User),
                    TRANSACTION.belongsTo(models.Product)
                }
            }
        })

    return TRANSACTION
}