import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import './Reg.css'
export default function Reg() {
    const[Reg,setReg]=useState({})
    const change=(e)=>{
const name=e.target.name
const value=e.target.value
setReg({...Reg,[name]:value})
console.log("input===>",Reg)
    }
    const submit=(e)=>{
e.preventDefault()
setReg({...Reg})
console.log("submit===>",Reg)
axios.post('http://localhost:5000/register/user-register',Reg).then(response=>{
  console.group("response===>",response)
  toast(response.data.message)
})







//axios header passing
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlRDIiwiaWF0IjoxNjYzNTg3NTUxLCJleHAiOjE2NjM2MzA3NTF9.9x-dftZFnv1OnYTLc0k1geHfsATVHFngBa7SJeiuw-k"
// axios.post('http://localhost:5000/login/user-login',Reg, {
//     headers: {
//         'Authorization': 'Bearer '+token
//     }
// })   
//



    }
  return (


<>
 
    
    <section
  className="vh-300 bg-image"
  style={{ backgroundColor: " #1877F2",paddingTop:'30px'}}
 
>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: 15 }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>
              <form>
              <div className="form-outline mb-4">
                  <input
                    type="text"
              
                    className="form-control form-control-lg"
                    placeholder='username'
                   name="username"
                   onChange={change}
                  />
                 
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                  
                    className="form-control form-control-lg"
                    placeholder='Email'
                    name="email"
                    onChange={change}
                  />
                 
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="number"
                   
                    className="form-control form-control-lg"
                    placeholder='Mobile'
                    name="mobile"
                    onChange={change}/>
                  
                </div>
                
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    
                    className="form-control form-control-lg"
                    placeholder='City'
                    name="city"
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
               
               
                <div className="form-check d-flex justify-content-center mb-5">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    defaultValue=""
                  
                  />
                  <label className="form-check-label" htmlFor="form2Example3g">
                    I agree all statements in{" "}
                    <a href="#!" className="text-body">
                      <u>Terms of service</u>
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="reg-btn"
                    onClick={submit}
                  >
                   <b> Register</b>
                  </button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">
                  Have already an account?{" "}
                  <a href="/" className="fw-bold text-body">
                    <u>Login here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
          <ToastContainer/>
        </div>
      </div>
    </div>
    
  </div>
</section>
</>
  )
}
