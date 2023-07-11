const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://shabeeha:shabeeha@cluster0.kjofqox.mongodb.net/?retryWrites=true&w=majority') 
const Schema=mongoose.Schema;

const registerSchema= new Schema({
    login_id:{type:Schema.Types.ObjectId,ref:"login_tb"},
    email:{ type: String, required: true } ,
    mobile:{ type: String, required: true } ,
    city:{ type: String, required: true } 
   
},{strict:false});
var registerdata=mongoose.model('register_tb',registerSchema);
module.exports=registerdata; 