import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <img src={logonav}  className="logo-nav nofotomoto" alt="logo"/>
        </Link>

    <div className={`hamburger mobile-nav-toggle ${ toggleClassCheck}`} id="hamburger-1" onClick={handleClick} >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
    </div>

<nav className="nav-bar">
  <ul className={` ${divState ? "active-nav": "primary-nav" }`} >
      <li className="navlink" >
      <NavLink to='/gallery' >Gallery</NavLink>
      </li>
      <li className="navlink">
         <NavLink to='/about' >About</NavLink>
      </li>
      <li className="navlink">
      <NavLink to='/contact' >Contact</NavLink>
      </li>
  </ul>
</nav>



    </header>

  )
}

