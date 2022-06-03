import React from 'react';
import './App.css';
import NavbarComp from './Navbar'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes> 
      </div>
    </div>
  );
}

export default App;
