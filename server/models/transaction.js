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
                    type          : DataTypes.STRING,
                    primaryKey    : true,
                    //allowNull     : false
                },
            user_id:
                {
                    type          : DataTypes.STRING,
                    references    : models.User,
                    referencesKey : "user_id"
                },
            product_id:
                {
                    type          : DataTypes.STRING,
                    references    : models.Product,
                    referencesKey : "product_id"
                }
        },


        {
            timestamps: false,
            freezeTableNme: true
        },



        {
            classMethods: {
                associate: function (models) {
                    Transaction.belongsTo(models.User),
                    Transaction.belongsTo(models.Product)
                }
            }
        })

    return Transaction
}