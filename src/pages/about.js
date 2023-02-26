import React from 'react'
import Navbar from '../components/navbar'
import headshot from '../images/tatiana-photo.jpg'
import aboutshot from '../images/aboutshot.jpg'
import Footer from '../components/footer';
import { useState } from 'react';




export default function About() {

const [readMore, setReadMore] = useState(false);

function toggleMore(){

    setReadMore(readMore => !readMore)
    
}

let toggleClass = readMore ? "readmore": null;





  return (
    <>

  <Navbar />

  <div id="demo-text">BIOGRAPHY</div>


<div className='aboutcontainer'>
  <img src={headshot} alt="tatiana headshot" className="headshot"/>
  
  <p>Tatiana Del Deo's career spans diverse worlds and cultures. Born and raised in Vilnius,
   Lithuania during Soviet rule, she emigrated to the USA to learn about fashion and commerce. 
   In 2001, working with editors at Harper’s Bazar and Vogue she helped introduce Moscow to western high fashion. 
  <span className={`hiddenread ${toggleClass}`}> Her transformative work led to an extended partnership with the groundbreaking Italian Stylist, Aldo Coppola.
    In 2009 she began a series of cultural exchanges with India, Nepal, Thailand and the Kingdom of Mustang,
     which lead to a large format photo book, the Forbidden Kingdom of Mustang. Since departing the world of the professional beauty industry, she has applied her trained eye and visual knowledge to advancing her career in photography as the focus of her creative drive.



Her photos have been published in numerous newspapers and magazines including:

La Nazione Newspaper, Italy; The Arts Newspaper; Overview Art; Aint-Bad; Provincetown Arts; Le Mile Magazine and The Independent
</span> <span onClick={toggleMore} className="readmorestyle">{readMore? "Read Less...":"Read More..."}</span>
</p>


</div>




<div className="aboutsection2">


<div className="quote">
  <p className='box'>
    <span>"Her photography is handsome and seriously good. Not just photos: each is an artistic message and beautifully taken.”</span>
    <cite>Berta Walker/Berta Walker Gallery</cite>
  </p>
</div>

<img src={aboutshot} alt="working headshot" className="headshot nofotomoto"/>

</div>


<Footer />

 </>



  )
}
