/*
 * User Model for In2Indie
 *
 */

var models = require('../models/');

module.exports = function (sequelize, DataTypes) {
    var USER = sequelize.define('USER', 
        
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
                    USER.hasOne(models.Transaction)
                }
            }
        }



        )

    return USER
}
