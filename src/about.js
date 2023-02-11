import React from 'react'
import Navbar from './components/navbar'
import IMAGES from './images/index';
import headshot from './images/tatiana-photo.jpg'
import aboutshot from './images/aboutshot.jpg'



export default function about() {
  return (
    <>

  <Navbar />

  <div id="demo-text">ABOUT ME...</div>


<div className='aboutcontainer'>
  <img src={headshot} alt="tatiana headshot" className="headshot"/>
  
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
   Porttitor leo a diam sollicitudin tempor id eu nisl. Ultricies leo integer malesuada nunc.
    Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Vel risus commodo viverra.</p>

</div>




<div className="aboutsection2">


<div className="quote">
  <p className='box'>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Kristus patriarhus nominus.</span>
    <cite>Forbes Magazine</cite>
  </p>
</div>

<img src={aboutshot} alt="working headshot" className="headshot"/>

</div>




 </>



  )
}
