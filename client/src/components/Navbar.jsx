import axios from 'axios'
import React, { useState } from 'react'
import './Navbar.css'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Navbar() {
  const [category, setcategory] = useState()
  const categoryclick = () => {
    axios.get("http://localhost:5000/book/view-category").then(response => {
      console.log("response===>", response)
      // console.log("category====>",response.data.data)
      setcategory(response.data.data)

    })
    
  }
  console.log("category====>", category)
  const deletecateg=(id)=>{
console.log("id===>",id)
axios.delete(`http://localhost:5000/book/delete-category/${id}`).then(res=>{
console.log("deleteitem===>",res)
toast(res.data.message)
})
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg   fixed-top d-flex flex-row bd-highlight mb-3" style={{ fontSize: "15px" }}>
        <div className='container'>
          <a href="#" className='navbar-brand d-flex justify-content-between align-items-center order-lg-0'>

            <span className='text-uppercase ms-2 text-dark'><i>BOOKSTORE</i></span>

          </a>
        
          <div className="d-flex justify-content-center ">

            <div className='collapse navbar-collapse order-lg-1' id='navMenu'>
              <ul className='navbar-nav '>
             
                <li className='nav-item px-2 py-2'>
                  <a className='nav-link text-uppercase text-dark' href="#header" style={{fontWeight:"900px"}}>HOME</a>
                </li>
                <li className='nav-item px-2 py-2'>
                  <a className='nav-link text-uppercase text-dark' href="/addcategory">ADD CATEGORY</a>
                </li>
                <li className='nav-item px-2 py-2 border-0'>
                  <a className='nav-link text-uppercase text-dark' href="/viewbook">VIEW BOOKS</a>
                </li>
                <li className='nav-item px-2 py-2'>
                  <a className='nav-link text-uppercase text-dark' href="/addbook">ADD BOOK </a>
                </li>
           
   
             
                <li className='nav-item px-2 py-2 border-0'>
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle bg-white text-dark"
                      type="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                      onClick={categoryclick}
                    >
                      Category
                    </button>
                
                    <div className="dropdown-menu ">
                      {category?.map((d,key)=>
                      <div className='categ-name d-flex justify-content-between'>
                        <div className='categ-view'>
                      <a className="dropdown-item text-dark" href="#">
                       {d?.category}
                      </a>
                      </div>
                      <div className='delete-categ'>
                      <i class="fa-sharp fa-solid fa-trash" onClick={()=>deletecateg(d._id)}></i>
                        </div>
                      </div>
                    
                      
                      )}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-end bd-highlight" >
            <div className="p-2 bd-highlight"><i class="fa-brands fa-instagram text-dark"></i></div>
            <div className="p-2 bd-highlight"><i class="fa-brands fa-facebook text-dark"></i></div>
            <div className="p-2 bd-highlight"><i class="fa-brands fa-twitter text-dark"></i></div>
            <div className="p-2 bd-highlight"><i class="fa-solid fa-bag-shopping text-dark"></i></div>
            {/* <div className="p-2 bd-highlight"> <i class="fa-regular fa-user"></i></div>
         */}


          </div>
        

<ToastContainer/>
        </div>
      </nav>


    </>
  )
}
