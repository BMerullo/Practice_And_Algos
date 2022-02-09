import './App.css';
import logo from './images/STARWARS_LOGO.jpeg'
import { Routes, Route, Link } from "react-router-dom";
import Categories from './components/Categories';
import React, {useState} from 'react'
function App() {

  const [starWarsList, setStarWarsList] = useState([]);
  return (
    <div className="App">
      <img src={logo} alt="LOGO" />
      <Routes>
        <Route path="/" element={<Categories starWarsList={starWarsList} setStarWarsList={setStarWarsList}/>}/>
      </Routes>
    </div>
  );
}

export default App;
