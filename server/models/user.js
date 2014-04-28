/*
 * User Model for In2Indie
 *
 */

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', 
        
        {
            username : DataTypes.STRING,
            password : DataTypes.STRING,
            user_id  : 
                
                {
                    type: DataTypes.UUID,
                    primaryKey: true,
                    allowNull: false
                },

            user_type: 
                
                {
                    type  : DataTypes.STRING,
                    values: ['community', 'In2Indie Uploader', 'admin']
                },

            name     : DataTypes.STRING,
            email    : DataTypes.STRING
        },

        {
            classMethods: {
                associate: function (models) {
                    User.hasOne(models.transaction)
                }
            }
        }



        )

    return User
}
