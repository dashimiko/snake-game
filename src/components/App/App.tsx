import React from 'react';
import '../../pages/index.scss';
import {StartScreen} from '../StartScreen/StartScreen';
import {Route, Switch} from 'react-router-dom';
import {Main} from '../Main/Main';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <StartScreen/>
        </Route>
        <Route path='/game'>
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
