import './App.css';
import { Router } from '@reach/router'
import React, { useState } from 'react';
import ListPlayer from './components/ListPlayer';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';
import Nav from './components/Nav';



function App() {

  const [listPageIsActive, setListPageIsActive] = useState(true);
  const [managePlayerStatusIsActive, setManagePlayerStatusIsActive] = useState(false)

  return (
    <div>
      <h1>Team Manager App</h1>
      <Nav
        managePlayerStatusIsActive={managePlayerStatusIsActive}
        setManagePlayerStatusIsActive={setManagePlayerStatusIsActive} />
      <Router>
        <ListPlayer
          path="/players/list"
          default
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive}
          managePlayerStatusIsActive={managePlayerStatusIsActive}
          setManagePlayerStatusIsActive={setManagePlayerStatusIsActive}
        />
        <AddPlayer
          path="/players/addplayer"
          listPageIsActive={listPageIsActive}
          setListPageIsActive={setListPageIsActive} />
        <PlayerStatus path="/status/game/:gameId"
          managePlayerStatusIsActive={managePlayerStatusIsActive}
          setManagePlayerStatusIsActive={setManagePlayerStatusIsActive}
        />
      </Router>
    </div>
  );
}

export default App;
