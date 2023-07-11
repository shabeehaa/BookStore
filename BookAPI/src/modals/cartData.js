const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shabeeha:shabeeha@cluster0.kjofqox.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    //schema definition

const cartSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    book_id:{type:Schema.Types.ObjectId,ref:"book_tb"},
     qty:{ type: String, required: true },   
     price:{ type: String, required: true }, 
})

var cartdata = mongoose.model('cart_tb',cartSchema) //model creation
module.exports=cartdata;