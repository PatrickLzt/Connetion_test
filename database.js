const SEQUELIZE = require('sequelize')

const Sequelize = new SEQUELIZE('testes', 'PatrickL', '21622292aB',{
    host: 'localhost',
    dialect: 'mysql'
})

Sequelize.authenticate()
.then(()=>{console.log("Connected")})
.catch(()=>{console.log("Error")})

module.exports = Sequelize