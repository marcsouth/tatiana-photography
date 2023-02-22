import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

export default function contact() {
  return (
    <>

  <Navbar />



  <div id="demo-text">CONTACT US</div>



  <form method="POST" action="https://formsubmit.co/el/duduxe">

      <div className="contactdivide">

     <input type="text" name="name" placeholder="Name" required />
     <input type="text" name="lastname" placeholder="Last Name" className='emailmiddle' required />

      </div>
     


     <input type="hidden" name="_template" value="table" />


      <input type="email" name="email" placeholder="Email"  required />
     <textarea type="message" name="message" placeholder="Your Message" className='messagefield' required />
     <button type="submit" value="Send">Send</button>
    </form>

<Footer />

    </>
  )
}
