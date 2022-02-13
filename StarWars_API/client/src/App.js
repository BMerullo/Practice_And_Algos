import './App.css';
import logo from './images/STARWARS_LOGO.jpeg'
import { Router } from '@reach/router'
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import CharacterDisplay from './view/CharacterDisplay';
function App() {

  

  return (
    <div className="App">
      <img src={logo} alt="LOGO" className="logo"/>
      <div className="main-page-cont">
      <NavBar/>
      <Router>
        <CharacterDisplay path="/characters/:id"/>
      </Router>
      </div>
    </div>
  );
}

export default App;
