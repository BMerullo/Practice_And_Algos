import './App.css';
import logo from './images/STARWARS_LOGO.jpeg'
import { Routes, Route, Link } from "react-router-dom";
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import CharacterDisplay from './view/CharacterDisplay';
function App() {

  

  return (
    <div className="App">
      <img src={logo} alt="LOGO" className="logo"/>
      <div className="main-page-cont">
      <NavBar/>
      <Routes>
        <Route path="/characters" element={<CharacterDisplay />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
