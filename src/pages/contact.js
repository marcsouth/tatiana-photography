import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import { ContactUs } from '../components/contact';

export default function contact() {
  return (
    <>

  <Navbar />



  <div id="demo-text">ENQUIRY FORM</div>


  <p className='contactpabove'>To enquire about fine art prints and booking, please contact me below.</p>

  <ContactUs />


<p className='contactp'>By submitting this form you will be added to our mailing list.</p>

<Footer />

    </>
  )
}
