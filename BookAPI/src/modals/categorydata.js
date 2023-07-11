const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shabeeha:shabeeha@cluster0.kjofqox.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    //schema definition

const categorySchema = new Schema({
    category:{ type: String, required: true },   
    
})

var categorydata = mongoose.model('category_tb',categorySchema) //model creation
module.exports=categorydata;