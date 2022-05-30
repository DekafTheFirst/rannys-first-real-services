import React, { useState } from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';



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
      <Navbar.Brand href="/">R</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" onClick={() => {handleNavToggleClick()}}/>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse collapse">
        <Nav className="nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/#ourservices">Our Services</Nav.Link>
          <Nav.Link href="/#about-us">About Us</Nav.Link>
          <Nav.Link href ="/contact-us" id="book-us" className="button">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
} 
export default NavbarComp;