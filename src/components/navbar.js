import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logonav from "../images/logo-nav.png";




export default function Navbar() {


    const [divState, setDivState] = useState(false);

       function handleClick(){  
    
    setDivState(divState => !divState)

}




let toggleClassCheck = divState ? ' is-active': null



  return (

  
    <header>
        <Link to='/'>
        <img src={logonav}  className="logo-nav"/>
        </Link>

    <div className={`hamburger mobile-nav-toggle ${ toggleClassCheck}`} id="hamburger-1" onClick={handleClick} >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>

<nav className="nav-bar">
  <ul className={` ${divState ? "active-nav": "primary-nav" }`} >
      <li className="navlink">
      <Link to='/gallery'>Gallery</Link>
      </li>
      <li className="navlink">
         <Link to='/about'>About</Link>
      </li>
      <li className="navlink">
      <Link to='/contact'>Contact</Link>
      </li>
  </ul>
</nav>



    </header>

  )
}

