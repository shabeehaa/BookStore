const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const register = require('../modals/registerdata')
const login=require('../modals/logindata')

const jwt=require('jsonwebtoken')


router.post('/user-login',async(req, res)=>{
    console.log(req.body);
    let fetchedUser
    try{
        await login.findOne({username: req.body.username})
        .then((user)=>{
            console.log("logindata=>",user)
            if(!user){
                return res.status(401).json({
                    success:false,
                    error:true,
                    message:"User Not Found!"
                })
            }
                fetchedUser = user
            console.log("result=>",req.body.password, user.password)

                return bcrypt.compare(req.body.password, user.password)      
        })
        .then(result=>{
            console.log("result=>",result)
            
            if(!result){
                return res.status(401).json({
                    success:false,
                    error:true,
                    message:"Please Check Password!"
                })
            }
           
            if(fetchedUser.role===2){
                id = fetchedUser._id
                 register.findOne({login_id:id})
                .then((registerData)=>{  
                    
                    let status = fetchedUser.status
                   
                       
                        const token = jwt.sign(
                            {username:fetchedUser.username, userId:fetchedUser._id, userRole:fetchedUser.role},
                            "secret_this_should_be_longer",
                            { expiresIn: "6h" }
                        )            
                        res.status(200).json({
                            success:true,
                            error:false,
                            token:token,
                            loginId: fetchedUser._id,
                            name: fetchedUser.username,
                            role:fetchedUser.role
                        })
                     })
            }
            if(fetchedUser.role===1){
                // console.log("role=>",fetchedUser.role);
                const token = jwt.sign(
                 {username:fetchedUser.username, userId:fetchedUser._id, userRole:fetchedUser.role},
                     "secret_this_should_be_longer",
                     { expiresIn: "6h" }
                 ) 
                 res.status(200).json({
                     success:true,
                     error:false,
                     token:token,
                     loginId: fetchedUser._id,
                     name: fetchedUser.username,
                     role:fetchedUser.role
                 })
             }
     
        })
        .catch(err=>{
            return res.status(401).json({
                message: "Auth failed",
                error: err
            })
        })
    }catch(error){
    console.log(error);
    }
   
})

module.exports = router;


// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlRDIiwiaWF0IjoxNjYzNTg3NTUxLCJleHAiOjE2NjM2MzA3NTF9.9x-dftZFnv1OnYTLc0k1geHfsATVHFngBa7SJeiuw-k"
// axios.post('http://localhost:5000/login/user-login',data, {
//     headers: {
//         'Authorization': 'Bearer '+token
//     }
// }).then((data)=>{

// }).catch((err)=>{

// })   