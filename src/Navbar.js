import React, { useState } from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { MdLocationPin, MdCall  } from 'react-icons/md';

import { BsMessenger, BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';



const NavbarComp = () => {
  const [navbar, setNavbar] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
    

  const changeBackground = () => {
    if(window.scrollY >= 80){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }


  const handleNavToggleClick = () => {
    console.log("clicked")
    console.log(isNavExpanded)
    setIsNavExpanded(!isNavExpanded)
  }
  
  
  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 566px)").matches) {
      setIsNavExpanded(false);
    }
  })

  window.addEventListener('scroll', changeBackground);
  return (  

  <Navbar collapseOnSelect={true} expand="sm" className={`navbar navbar-expand-sm navbar-dark ${navbar ? "active" : ""} ${isNavExpanded ? "active active-mobile active-by-click" : ""}`}>
    <Container fluid>
      <Link to="/" className='navbar-brand'>R</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {handleNavToggleClick()}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav">
          <Nav.Link eventKey="1" className="nav-link" as={Link} to="/">Home</Nav.Link>
          <a className="nav-link" href="/rannys-first-real-services/#our-services">Our Services</a>
          <a className="nav-link" href="/rannys-first-real-services/#about-us">About Us</a>
          <Nav.Link eventKey="2" className="nav-link button" as={Link} to ="/contact-us" id="book-us">Contact Us</Nav.Link>
        </Nav>
        <div className="nav-contact-info">
          <div><a href='#'><BsMessenger/></a> <a href='#'><BsFacebook /></a> <a href='#'><BsWhatsapp /></a> <a href='#'><BsInstagram/></a></div>
          <div><MdLocationPin/> <p>21B, Groovestreet, Los Santos</p></div>
          <div><MdCall/> <p>Call Us @ 09662947634</p></div>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
} 
export default NavbarComp;