import React from 'react';
import './App.css'; 
import Navbar from './components/navbar'
import { Link } from "react-router-dom";





const App = () => {
    return(


        <div className="landingimage">
        
        <Navbar />

        <button className='landingbutton'> <Link to='/Gallery'>AVAILABLE PRINTS</Link></button>
      
        </div>


    );
}

export default App;