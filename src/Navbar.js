import React, { useState } from 'react';
import { Link, NavLink,} from 'react-router-dom';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
    console.log(window.location.href)
  }


  const makeNavbarDark = () => {
    console.log("clicked")
    console.log(isNavExpanded)
    setIsNavExpanded(!isNavExpanded)
  }

  

  window.addEventListener('scroll', changeBackground);
  return ( <nav className={`navbar navbar-expand-sm navbar-dark ${navbar ? "active" : ""} ${isNavExpanded ? "active active-mobile" : ""}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">R</Link>
      <button className="navbar-toggler" onClick={() => {makeNavbarDark()}} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          
          <NavLink className="nav-link" to="/"><span>HOME</span></NavLink>
          <a className="nav-link" href="/#our-services"><span>OUR SERVICES</span></a>
          <a className="nav-link" href="/#about-us"><span>ABOUT US</span></a>
          <NavLink className="nav-link" to="/contact-us" id="book-us"><span className='center'>BOOK US</span></NavLink>
        </div>
      </div>
    </div>
    <script>
      
    </script>
  </nav> 
  );
} 
export default Navbar;