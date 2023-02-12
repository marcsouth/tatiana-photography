import React from 'react'
import Navbar from './components/navbar'
import img1 from './images/img1.JPG'
import img2 from './images/img2.JPG'
import img3 from './images/img3.JPG'
import img4 from './images/img4.JPG'
import img5 from './images/img5.JPG'
import img6 from './images/img6.JPG'
import img7 from './images/img7.JPG'
import img9 from './images/img9.JPG'
import img13 from './images/img13.JPG'
import img15 from './images/img15.JPG'
import img11 from './images/img11.JPG'


export default function gallery() {

  return (
    <>

<Navbar />

<h2>Portrait</h2>
    
    <div id="gallery" className='container-fluid'>  
      <img src={img1} className='img-responsive'/>
      <img src={img2} className='img-responsive'/>
      <img src={img3} className='img-responsive'/>
      <img src={img4} className='img-responsive'/>
      <img src={img5} className='img-responsive'/>
      <img src={img6} className='img-responsive'/>
      <img src={img7} className='img-responsive'/>
      <img src={img9} className='img-responsive'/>
      <img src={img13} className='img-responsive'/>
      <img src={img15} className='img-responsive'/>
      <img src={img11} className='img-responsive'/>
    </div>
    
    <h2>Still Life</h2>
        
        <div id="gallery" className='container-fluid'>  
        <img src={img1} className='img-responsive'/>
      <img src={img2} className='img-responsive'/>
      <img src={img3} className='img-responsive'/>
      <img src={img4} className='img-responsive'/>
      <img src={img5} className='img-responsive'/>
      <img src={img6} className='img-responsive'/>
      <img src={img7} className='img-responsive'/>
      <img src={img9} className='img-responsive'/>
      <img src={img13} className='img-responsive'/>
      <img src={img15} className='img-responsive'/>
      <img src={img11} className='img-responsive'/>
          <img src="" className='img-responsive'/>
        
        </div>
    
    
        <h2>Landscape</h2>
        
        <div id="gallery" className='container-fluid'>  
        <img src={img1} className='img-responsive'/>
      <img src={img2} className='img-responsive'/>
      <img src={img3} className='img-responsive'/>
      <img src={img4} className='img-responsive'/>
      <img src={img5} className='img-responsive'/>
      <img src={img6} className='img-responsive'/>
      <img src={img7} className='img-responsive'/>
      <img src={img9} className='img-responsive'/>
      <img src={img13} className='img-responsive'/>
      <img src={img15} className='img-responsive'/>
      <img src={img11} className='img-responsive'/>
          <img src="" className='img-responsive'/>
        
        </div>


    </>
  )
}
