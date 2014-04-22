/*
 * Product Model for In2Indie
 *
 */

module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define('Product', 
        {
            product_name      : DataTypes.STRING,
            product_type      : 
                {
                    type: DataTypes.STRING,
                    values: ['games', 'movies', 'music']
                },
            product_id        : 
                
                {
                    type      : DataTypes.UUID,
                    primaryKey: true,
                    allowNull : false
                },

            product_price     : DataTypes.DECIMAL,
            product_available : DataTypes.BOOLEAN
        }, 

    {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Task)
            }
        }
    })

    return User
}