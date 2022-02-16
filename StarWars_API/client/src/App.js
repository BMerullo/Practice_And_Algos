import './App.css';
import logo from './images/logo_img.png'
import { Router } from '@reach/router'
import React, {useState} from 'react'
import NavBar from './components/NavBar';
import Characters from './components/Characters';
import Movies from './components/Movies';
import Planets from './components/Planets';
function App() {

  const [people, setPeople] = useState([]);
  const [movies, setMovies] = useState([]);
  const [planets, setPlanets] = useState([]);
  

  return (
    <div className="App">
      <img src={logo} alt="LOGO" className="logo"/>
      <div className="main-page-cont">
      <NavBar/>
      <Router>
        <Characters path="/characters/:id" people={people} setPeople={setPeople} />
        <Movies path="/movies/:id" movies={movies} setMovies={setMovies}/>
        <Planets path="/planets/:id" planets={planets} setPlanets={setPlanets}/>
      </Router>
      </div>
    </div>
  );
}

export default App;
