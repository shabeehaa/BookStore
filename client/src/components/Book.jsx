import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Book() {
    const[Book,setBook]=useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/book/view-books").then(response=>{
console.log("viewbook=>",response)

setBook(response.data.data)
})
console.log("recentbook===>",Book)

    },[])
  return (
   <>
 
 <div className='container'  style={{paddingTop:"40PX"}}>
<div className=' row '>
     {Book?.map((d,key)=>
   <div className="col-sm-4 card offset-sm-1" style={{ width: "18rem" ,paddingTop:"40PX"}}>
  <img src="{d.image}" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{d.title}
</h5>
    <p className="card-text">
    {d.author}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
)}
</div>
</div>

   
   
   </>
  )
}
