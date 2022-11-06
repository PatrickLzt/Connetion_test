const DataTypes = require('sequelize');
const Sequelize = require('./database')

const USER = Sequelize.define('Users', {// Structure of user register
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNUll: false,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNUll: false,
    }
});

//USER.sync({force:true}); console.log(`The table for the User model was just (re)created`);

//Sequelize.sync({ force: true }); console.log(`All models were synchronized successfully`);


module.exports = USER