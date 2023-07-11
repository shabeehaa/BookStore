import axios from 'axios'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './Addbook.css'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function Addbook() {
    const [Book, setBook] = useState({
        login_id: JSON.parse(localStorage.getItem("id"))
        , token: JSON.parse(localStorage.getItem("token"))
    })


    const [file, setfile] = useState({})
    const change = (e) => {
        const name = e.target.name
        const value = e.target.value
        setBook({ ...Book, [name]: value })
        console.log("input====>", Book)
    }
    const submit = (e) => {
        e.preventDefault()
        // setBook({...Book})
        console.log("submit====>", Book)

        if (file) {
            const data = new FormData();
            const filename = file.name;
            data.append("name", filename)
            data.append("file", file)
            axios.post("http://localhost:5000/book/upload", data).then(response => {
                console.log("response====>", response)
            })
        }
        axios.post("http://localhost:5000/book/addBook", Book).then(resp => {
            console.log("resp===>", resp)
            toast(resp.data.message)
        })
    }

    return (
        <>
            <div className='addbook'>
                <div className='row conatiner offset-sm-3'>

                    <form className='col-sm-7' style={{ marginTop: "40px" }}>
                        <div className='heading offset-sm-3'>

                            <h3> Add Book Form</h3>

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
                                onChange={change} />
                        </div>
                        <div className='input-id'>
                            <br />
                            <input
                                type="number"
                                className="form-control"
                                id="input-field"
                                aria-describedby="emailHelp"
                                placeholder="price"
                                name="price"
                                onChange={change} />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="text"
                                className="form-control"
                                id="input-field"
                                placeholder="author"
                                name="author"
                                onChange={change} />
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
                                onChange={change} />
                        </div>
                        <div className="form-group">
                            <br></br>
                            <input
                                type="file"
                                className="form-control"
                                id="input-field"
                                placeholder="image"
                                name="image"
                                onChange={(e) => { setfile(e.target.files[0]); console.log(e.target.files); setBook({ ...Book, image: e.target.files[0].name }) }} />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <div className='col-sm-6'>
                                <button type="submit" className='btn btn-primary offset-sm-3 form-control' onClick={submit} id="addbook-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div><ToastContainer></ToastContainer>



        </>
    )
}

