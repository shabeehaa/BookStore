import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Viewcategory.css'

export default function Viewcategory() {
  const [Categ, setCateg] = useState()
  // const viewcategory=()=>{
  //     axios.get("http://localhost:5000/book/view-category").then(res=>{
  //         console.log("res====>",res)
  //         setCateg(res.data.data)
  //         console.log("category==>",Categ)
  //     })

  //     }


  useEffect(() => {
    axios.get("http://localhost:5000/book/view-category").then(res => {
      console.log("res====>", res)
      setCateg(res.data.data)
    })

  }, [])
  console.log("categ====>", Categ)
  const deleteitem = (id) => {
    console.log("id===>",id)
   axios.post(`http://localhost:5000/book/delete-category/${id}`).then(response=>{
    console.log("deleteitem===>",response)
   })
  }
  return (

    <>
<div className='view-categ'>
      {Categ?.map((d, key) =>
        <div className='item-list'>
          <ul className='unorderd '>
            <li className='unorderd-list'>

              <span className='delete'><i class="fa-solid fa-trash" onClick={() => deleteitem(d._id)}></i></span>
              <span className='list'>{d?.category}</span>


            </li>


          </ul>



        </div>



      )}

</div>

    </>
  )
}
