import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import img1 from '../images/img1.JPG'




export default function Shop() {


  return (

    <>

<Navbar />


<img src={img1}  className="shopimage"/>



<Footer />

</>

  )
}
