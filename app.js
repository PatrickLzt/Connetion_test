const USER = require('./users')

var Name = "Patrick_rei_delas"

if(Name != "" && Name != undefined){
    USER.create({
        name: Name});
        console.log(`DEU CERTO CARALHOOOOO`)
}