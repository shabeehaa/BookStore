import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Updatebook() {
const[Bookid,setBookid]=useState(JSON.parse(localStorage.getItem("idd")))
const[UpdateBook,setUpdateBook]=useState({login_id:JSON.parse(localStorage.getItem("id"))
,token:JSON.parse(localStorage.getItem("token"))})
const[Image,setImage]=useState({})
const change=(e)=>{
const name=e.target.name
const value=e.target.value
setUpdateBook({...UpdateBook,[name]:value})
console.log("input===>",UpdateBook)
}
const submit=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:5000/book/update-book/${Bookid}`,UpdateBook).then(respon=>{
console.log("update-response===>",respon)
toast(respon.data.message)

})
}
  return (
  <>
    <div className='addbook'>
                <div className='row conatiner offset-sm-3'>

                    <form className='col-sm-7' style={{ marginTop: "40px" }}>
                        <div className='heading offset-sm-3'>

                            <h3> Update Book Form</h3>

                        </div>
                      <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="category"
                                name="category"
                                onChange={change}

                            />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="pages"
                                name="pages"
                                onChange={change}

                            />
                        </div>
                        
                        <div className="form-group">
                        
                          
                        </div>
                        
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="title"
                                name="title"
                                onChange={change}/>
                        </div>
                        <div className='input-id'>
                            <br/>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="input-field"
                                    aria-describedby="emailHelp"
                                    placeholder="price"
                                    name="price"
                                    onChange={change}/>
                            </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="author"
                                name="author"
                                onChange={change}/>
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="publisher"
                                name="publisher"
                                onChange={change}


                            />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="desc"
                                name="desc"
                                onChange={change}


                            />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="language"
                                name="language"
                                onChange={change}/>
                        </div>
                    <div className="form-group">
                            <br></br>
                            <input
                                type="file"
                                className="form-control"
                                id="input-field"
                                placeholder="image"
                                name="image"
                                onChange={(e)=>{setImage(e.target.files[0]);console.log(e.target.files);setUpdateBook({...UpdateBook,image:e.target.files[0].name})}}/>
                        </div>
                        <br />

<br></br>
<button type="submit" className='btn btn-primary offset-sm-2 ' onClick={submit} id="addbook-btn">Submit</button>
</form>
</div>:

</div><ToastContainer></ToastContainer>

  </>
  )
}

