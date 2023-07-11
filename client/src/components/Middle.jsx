import React from 'react'


import Bookde from './Bookde'
import Footer from './Footer'
import './Middle.css'
import Navbar from './Navbar'



export default function Middle() {
   


  return (
    <>

    <div className='home-page'>
 <div className='navbar'>
<Navbar/>
</div>
 <header id = "header"  class = "vh-100 carousel slide" data-bs-ride = "carousel" style = {{paddingTop: "104px"}}>
        <div class = "container h-100 d-flex align-items-center carousel-inner">
            <div class = "text-center carousel-item active">
                <h2 class = "text-capitalize">best collection</h2>
                <h1 class = "text-uppercase py-2 fw-bold">new arrivals</h1>
                <a href = "#" class = "btn mt-3 text-uppercase">shop now</a>
            </div>
            <div class = "text-center carousel-item">
                <h2 class = "text-capitalize">best price & offer</h2>
                <h1 class = "text-uppercase py-2 fw-bold">new season</h1>
                <a href = "#" class = "btn mt-3 text-uppercase">buy now</a>
            </div>
        </div>

        <button class = "carousel-control-prev" type = "button" data-bs-target="#header" data-bs-slide = "prev">
            <span class = "carousel-control-prev-icon"></span>
        </button>
        <button class = "carousel-control-next" type = "button" data-bs-target="#header" data-bs-slide = "next">
            <span class = "carousel-control-next-icon"></span>
        </button>
    </header>

    </div>
    <div className='bookitem-list'>
   <Bookde/>
   </div>
   <div className='footer-display'>
<Footer/>
   </div>
    </>
  )
}
