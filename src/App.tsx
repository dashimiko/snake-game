import React from 'react';
import './App.scss';
import NeonCursor from './neonCursor';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className="glitch">
          Snake Game
        </p>
        <button className="start_button">
          Start
        </button>
      </header>
      <NeonCursor/>
    </div>
  );
}

export default App;
