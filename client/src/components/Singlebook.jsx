import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import { useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Singlebook() {
  
const[Singledetails,setSingledetails]=useState({})
    let { id } = useParams();
    console.log('id===>',id)
    useEffect(()=>{
      axios.get(`http://localhost:5000/book/single-book/${id}`).then(response=>{
        console.log("respons===>",response)
        setSingledetails(response.data.data[0])
 
            })
          
    },[])
    console.log("singlebookdetails====>",Singledetails)
const deletebook=(id)=>{
  console.log("id===>",id)
  axios.delete(`http://localhost:5000/book/delete-book/${id}`).then(response=>{
    console.log("deletebook===>>",response)
    toast(response.data)
   
  })
}
  return (
    <>
<section>
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{ borderRadius: 15 ,boxShadow:"10px 20px solid black"}}>
          <div
            className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light"
          >
            <img
              src={`/upload/${Singledetails?.image}`} 
              style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15,width:"400px" ,height:"250px"}}
              className="img-fluid"
              alt="title"
            />
            <a href="#!">
              <div className="mask" />
            </a>
          </div>
          <div className="card-body pb-0">
            <div className="offset-sm-5">
              <div>
                <p>
                  <a href="#!" className="text-dark " style={{textDecoration:"none",fontSize:"20px"}}>
                   {Singledetails.title}
                  </a>
                </p>
              
              </div>
              
            </div>
          </div>
          <hr className="my-0" />
          <div className="card-body pb-0">
            <div className="d-flex justify-content-start offset-sm-3">
              <p>
                <a href="#!" className="text-dark" style={{textDecoration:"none"}}>
                 <b>Category:</b>
                </a>
              </p>
              <p className="text-dark">{Singledetails.category}</p>
            </div>
            <div className="d-flex justify-content-start offset-sm-3">
              <p>
                <a href="#!" className="text-dark" style={{textDecoration:"none"}}>
               <b> Publisher:</b>
                </a>
              </p>
              <p className="text-dark">{Singledetails.publisher}</p>
            </div>
            <div className="d-flex justify-content-start offset-sm-3">
              <p>
                <a href="#!" className="text-dark" style={{textDecoration:"none"}}>
              
                <b>Price:</b>
                </a>
              </p>
              <p className="text-dark">{Singledetails.price}</p>
            </div>
            <div className="d-flex justify-content-start offset-sm-3">
              <p>
                <a href="#!" className="text-dark"style={{textDecoration:"none"}}>
               
                <b>Author:</b>
                </a>
              </p>
              <p className="text-dark">{Singledetails.author}</p>
            </div>
            <div className="d-flex justify-content-start offset-sm-3">
              <p>
                <a href="#!" className="text-dark"style={{textDecoration:"none"}}>
               
                <b>Language:</b>
                </a>
              </p>
              <p className="text-dark">{Singledetails.language}</p>
            </div>
          
          </div>
          <hr className="my-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="/updatebook" className="text-dark fw-bold">
                Update
              </a>
              <button type="button" className="btn btn-primary" onClick={()=>deletebook(Singledetails._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer></ToastContainer>
</section>


    
    
    
    
    
    
    
    </>
  )
}


