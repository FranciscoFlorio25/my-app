import React from 'react';
import {BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import AddHero from "./Component/AddHero";
import Hero from './Component/Hero';
import HeroList from './Component/HeroList';

function App() {
  return (
    <Router>
      <div>
        <nav  className="navbar navbar-expand navbar-dark bg-dark">
           <a href= "/Heros" className="navbar-brand">Super Heros</a>
           <a href= "/AddHero" className="navbar-brand">Add Hero</a>
        </nav> 
        <div className="container mt-3">
          <Routes>
            <Route path="/" element= {<HeroList/>} />
            <Route path="/Heros" element={<HeroList/>} />
            <Route path="/AddHero" element={<AddHero/>} />
            <Route path="/Hero/:id" element={<Hero/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
