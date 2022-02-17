import './App.css';
import logo from './images/logo_img.png'
import { Router } from '@reach/router'
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Characters from './components/Characters';
import Movies from './components/Movies';
import Planets from './components/Planets';
import Species from './components/Species';
import Spaceships from './components/Spaceships';
import Vehicles from './components/Vehicles';
function App() {

  const [people, setPeople] = useState([]);
  const [movies, setMovies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [spaceships, setSpaceships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  

  return (
    <div className="App">
      <img src={logo} alt="LOGO" className="logo"/>
      <div className="main-page-cont">
      <NavBar/>
      <Router>
        <Characters path="/characters/:id" people={people} setPeople={setPeople} />
        <Movies path="/movies/:id" default movies={movies} setMovies={setMovies}/>
        <Planets path="/planets/:id" planets={planets} setPlanets={setPlanets}/>
        <Species path="/species/:id" species={species} setSpecies={setSpecies}/>
        <Spaceships path="/spaceships/:id" spaceships={spaceships} setSpaceships={setSpaceships}/>
        <Vehicles path="/vehicles/:id" vehicles={vehicles} setVehicles={setVehicles}/>
      </Router>
      </div>
    </div>
  );
}

export default App;
