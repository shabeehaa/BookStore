const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://shabeeha:shabeeha@cluster0.kjofqox.mongodb.net/?retryWrites=true&w=majority') 
const Schema = mongoose.Schema    //schema definition

const bookSchema = new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    status:{ type: Number, required: true },
    category:{ type: String, required: true },
     title:{ type: String, required: true },   
     publisher:{ type: String, required: true },   
     price:{ type: String, required: true },   
     author:{ type: String, required: true },
     pages:{ type: String, required: true },   
     desc:{ type: String, required: true },   
     language:{ type: String, required: true },    
     image:{ type: String, required: true },   
   
})

var bookdata = mongoose.model('book_tb',bookSchema) //model creation
module.exports=bookdata;