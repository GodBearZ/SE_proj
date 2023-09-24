const mongoose = require('mongoose');

const roleSchema = mongoose.Schema ({
    UseID:String,
    Username:String,
    FName:String,
    LName:String,
    Role:String,
    RegistionDate:Date 
},{timestamps:true})

module.exports = mongoose.model('roles',roleSchema)

