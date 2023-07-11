import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'

export default function Form() {
    const [Input, setInput] = useState({})
    const navigate = useNavigate()
   


    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput({ ...Input, [name]: value })

    }
    const additem = (e) => {
        axios.post("http://localhost:5000/book/add-category",Input).then(response => {

            console.log("response===>", response)
            toast(response.data.message)
           
        })

        console.log("inputt====>", Input)

    }

const viewcategory=()=>{
    navigate (`/viewcategory`)
}



   
    return (
        <>
        <div className='form-category'>
            <div className='row container'>
                <form>
                    <div class="d-flex flex-row bd-highlight mb-3 offset-sm-5 col-sm-12" style={{ paddingTop: "50px"}}>
                    <div className="form-group">
                        <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder='Add category'
                                style={{ width: "300px", height: "40px" }}
                                onChange={change}
                                name="category"
                            />

                        </div>
                        <div className='add-icon'>
                            <i class="fa-regular fa-plus"onClick={additem}></i>
                            
                        </div>
                    </div>
                  
                </form>
                </div>
                <br></br>
                <br></br>
                </div>

<ToastContainer/>

      
               




        </>
    )
}
