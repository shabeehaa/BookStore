import React from 'react'
import './Bookde.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Bookde() {
  const[Allbook,setAllbook]=useState()
  const[category,setCategory]=useState()
  const navigate=useNavigate()
  // const[map]
  useEffect(()=>{
    axios.get("http://localhost:5000/book/view-books").then(response=>{
        console.log("response====>",response)
        const data=response.data.data
        setAllbook(data)
        // localStorage.setItem("categorys",JSON.stringify(data.category))
    })
        }
        ,[])
        console.log("allbookkk====>",Allbook)
       
  const display=(categorys)=>{
    console.log(categorys)
    const categ=Allbook.filter((data)=>{
      return data.category==categorys
    })
    setAllbook(categ)
    console.log(categ)
        }
 const allcateg=()=>{
  axios.get("http://localhost:5000/book/view-books").then(response=>{
    console.log("response====>",response)
    setAllbook(response.data.data)
})
 }
const gotosinglepage=(id)=>{
console.log("--id===>",id)
navigate(`/singlebook/${id}`)
 }
  return (
<>

 <div className='book-info'>
  <div className='container my-5 py-5'>
  <div className='row'>
                <div className='col-sm-12 mb-5'>
                    <h1 className='display-6 fw-bolder tex-center offset-sm-5 text-dark'>Latest Books</h1>
                    <hr/>
                </div>
            </div>
         
    </div>
      <div className='collection-list mt-4 row gx-0 gy-3'>
        {Allbook&&Allbook?.map((d,key)=>
         <div className='col-sm-3 mb-4 offset-sm-1' id="card-design">
        <div className='seriescontainer'>
       

        <div className="card h-100 text-center p-4">
  <img src={`/upload/${d?.image}`} className="card-img-top" alt="..." height="250px"/>
  <div className="card-body">
    <h5 className="card-title">{d.title}</h5>
    <p className="card-text lead fw-bold">
    ₹{d.price}
    </p>
    <a href="#" className="btn btn-outline-dark" onClick={()=>gotosinglepage(d._id)}>
     Click To Read
    </a>
  </div>
</div>





</div>    </div>
       
       )}
    </div>
    </div>
    </>
  )
}
