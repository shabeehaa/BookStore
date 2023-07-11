const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shabeeha:shabeeha@cluster0.kjofqox.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    //schema definition

const LoginSchema = new Schema({
     username: String,
     password: String,
     role: Number,
     status:Number
})

var Logindata = mongoose.model('login_tb',LoginSchema) //model creation
module.exports=Logindata;