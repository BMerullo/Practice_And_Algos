import './App.css';
import { Router } from '@reach/router'
import React, { useState } from 'react';
import ListPlayer from './components/ListPlayer';
import AddPlayer from './components/AddPlayer';



function App() {

  const [listPageIsActive, setListPageIsActive] = useState(true);

  return (
    <div>
      <h1>Team Manager App</h1>
      <Router>
        <ListPlayer
          path="/players/list"
          default
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive} />
        <AddPlayer
          path="/players/addplayer"
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive} />
      </Router>
    </div>
  );
}

export default App;
