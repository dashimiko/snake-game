import React from 'react';
import '../../pages/index.scss';
import {Main} from '../Main/Main';
import {Route, Switch} from 'react-router-dom';
import {GameZone} from '../GameZone/GameZone';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>
        <Route path='/game'>
          <GameZone/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
