/*
 * In2Indie PostgreSQL data models
 * Note for Author: need to include the following:
 *    - Foreign keys
 *    - Associations
 */


//Connect to user postgres
var Sequelize = require('sequelize')
    , sequelize = new Sequelize('postgres', 'postgres', 'postgres', 
        {
            dialect: "postgres",
            port:    5432, // or 54
        })
    
    //Define User tables
    , User = sequelize.define('User', 
        {
            username    : Sequelize.STRING,
            password    : Sequelize.STRING,
            user_id     : Sequelize.STRING,
            user_type   : Sequelize.STRING,
            name        : Sequelize.STRING,
            email       : Sequelize.STRING
        })

    //Define Product tables
    , Product = sequelize.define('Product',
        {
            product_id          : Sequelize.STRING,
            product_name        : Sequelize.STRING,
            product_type        : Sequelize.STRING,
            product_price       : Sequelize.DECIMAL,
            product_available   : Sequelize.BOOLEAN
        })
    
    //Define Inventory tables
    , Inventory = sequelize.define('Inventory,'

    {
        product_id          : Sequelize.STRING,
        product_name        : Sequelize.STRING,
        product_available   : Sequelize.BOOLEAN
    })

    //Define Transaction
    , Transaction = sequelize.define('Transaction',
        {
            transaction_id   : Sequelize.STRING,
            user_id          : Sequelize.STRING,
            product_id       : Sequelize.STRING
        })

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
