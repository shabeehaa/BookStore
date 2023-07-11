import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {
const navigate=useNavigate()
    // const[Log,setLog]=useState()
const[Details,setDetails]=useState({})
const[Input,setInput]=useState({})

const change=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setInput({...Input,[name]:value})
console.log("login===>",Input)
}
const submit=(a)=>{
a.preventDefault()

console.log("submit====>",Input)
axios.post("http://localhost:5000/login/user-login",Input).then(response=>{
console.log("response===>",response)
setDetails(response.data)
localStorage.setItem("id",JSON.stringify(response.data.loginId))
localStorage.setItem("token",JSON.stringify(response.data.token))
toast("login succesful")


if(response.data.success==true
  ){
   navigate(`/middle`)

  }

})

        .catch((error)=>{
        toast(error.response.data.message);
          console.log("error===>",error.response.data.message);
        })
    }
  return (

<>
   <section className="section" >
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg6 col-xl-5">
          <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
            <div className="card-body p-5 text-center">
              <h1 className="login-head">Login in</h1>
             
              <div className="form-outline mb-4">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder='Username'
                  name="username"
                  onChange={change}
                />
              
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder='Password'
                  name="password"
                  onChange={change}
                />
              
              </div>
             <div className='form-link'>
               <span className='login-reg'>Don't have an account?<a href='/reg' className='signup-link'>register</a></span> 
              </div>
              <button className="login-button" type="submit" onClick={submit} style={{backgroundColor:"#1877F2"}}>
                Login
              </button>
              <hr className="my-4" />
              <button
                className="btn btn-lg btn-block btn-primary mb-2"
                style={{ marginBottom: "20px" }}
                type="submit"
              >
                <i className="fab fa-google me-2" /> Sign in with google
              </button>
              <button
                className="btn btn-lg btn-block btn-primary mb-2"
           
                type="submit"
              >
                <i className="fab fa-facebook-f me-2" />
                Sign in with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer/>
  </section>
  </>
  )
}
