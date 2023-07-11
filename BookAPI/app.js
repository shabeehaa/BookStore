const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registerRouter = require('./src/routes/registerRouter');
const loginRouter=require('./src/routes/loginRouter')
const bookRouter = require('./src/routes/bookRouter');

const port = 5000;
 
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());

app.use('/login',loginRouter);   //http://localhost:5000/login/user-login   ,http://localhost:5000/book/addBook        
app.use('/register',registerRouter);
app.use('/book',bookRouter);  //    http://localhost:5000/register/user-register


app.listen(port,function(){
    console.log("server running on localhost: "+ port);
});