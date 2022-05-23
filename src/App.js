import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import ContactUs from './ContactUs'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact-us" element={<ContactUs />}></Route>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
