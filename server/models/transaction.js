/*
 * Transaction Model for In2Indie
 *
 */


module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define('Transaction', 
        {
            transaction_id    : 
                
                {
                    type      : DataTypes.UUID,
                    primaryKey: true,
                    allowNull : false
                },
        }, 

    /*{
        classMethods: {
            associate: function (models) {
                Product.hasMany(models.Task)
            }
        }*/
    })

    return Transaction
}