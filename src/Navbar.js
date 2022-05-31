import React, { useState } from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';



const NavbarComp = () => {
  const [navbar, setNavbar] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isStillVisible, setIsStillVisible] = useState(true);
  

  const changeBackground = () => {
    console.log(window.screenY);
    if(window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
    console.log("background changed")
  }


  const handleNavToggleClick = () => {
    console.log("clicked")
    console.log(isNavExpanded)
    setIsNavExpanded(!isNavExpanded)
    removeWithTransition()
  }
  
  const removeWithTransition = () => {
    setIsStillVisible(!isStillVisible)
    if(isStillVisible === false){
      console.log("transitions initiated")
    }
    else {
      console.log("still visible")
    }
  }

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 566px)").matches) {
      setIsNavExpanded(false);
    }
  })

  window.addEventListener('scroll', changeBackground);
  return (  

  <Navbar expand="sm" className={`navbar navbar-expand-sm navbar-dark ${navbar ? "active" : ""} ${isNavExpanded ? "active active-mobile active-by-click" : ""}`}>
    <Container fluid>
      <Link to="/" className='navbar-brand'>R</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" onClick={() => {handleNavToggleClick()}}/>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse collapse">
        <Nav className="nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <a className="nav-link" href="/rannys-first-real-services/#our-services">Our Services</a>
          <a className="nav-link" href="/rannys-first-real-services/#about-us">About Us</a>
          <NavLink className="nav-link button" to ="/contact-us" id="book-us">Contact Us</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
} 
export default NavbarComp;