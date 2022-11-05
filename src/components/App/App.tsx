import React from 'react';
import '../../pages/index.scss';
import NeonCursor from '../NeonCursor/NeonCursor';
import Main from '../Main/Main';
import {Route, Switch} from 'react-router-dom';
import Game from '../Game/Game'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main/>
          <NeonCursor/>
        </Route>
        <Route path='/game'>
          <Game/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
