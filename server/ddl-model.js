/*
 * In2Indie PostgreSQL data models
 * 
 */


//Connect to user postgres
var Sequelize = require('sequelize'), 
    sequelize = new Sequelize('postgres', 'postgres', 'postgres', 
        {
            dialect: "postgres",
            port:    5432, 
        });

//Define tables if models subdirectory do not work
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
            }),
        Product = sequelize.define('Product', 
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
                        referenes    : models.inventory.product_available,
                        referenesKey : "id"
                    }
            }, 

            {
                classMethods: {
                    associate: function (models) {
                        Product.hasMany(models.inventory),
                        Product.hasOne(models.transaction)
                    }
                }
            }),
        Transaction = sequelize.define('Transaction', 
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
            }),

        
        Inventory = sequelize.define('Inventory', 
            {
                product_id           : 
                    {
                        type         : DataTypes.UUID,
                        allowNull    : false,
                        references   : models.product.product_id,
                        referencesKey: "id"

                    },
                transaction_id       : 
                    {
                        type         : DataTypes.UUID,
                        allowNull    : false,
                        references   : models.transaction.transaction_id,
                        referencesKey: "id"

                    },
                product_available    : 
                    {
                        type         : DataTypes.BOOLEAN,
                        allowNull    : false,
                        primaryKey:  : true
                    }
            },

            {
                classMethods: {
                    associate: function (models) {
                        Inventory.hasOne(models.transaction),
                        Inventory.hasOne(models.product)
                    }
                }
            });
    return user;
    return product;
    return transaction;
    return inventory;

}  
    


//Test connection to Database
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })
