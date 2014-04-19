var Sequelize = require('sequelize')
  , sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
      dialect: "postgres", 
      port:    5432, 
    })
 
sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })
