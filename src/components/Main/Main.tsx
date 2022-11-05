import React from 'react';
import {Link} from 'react-router-dom';

function Main() {

  return (
    <main className="App_main">
      <p className="glitch">
        Snake Game
      </p>
      <Link to='/game' className="start_button">
        <p className='start_button_text'>
        Start
        </p>
      </Link>
    </main>
  );
}

export default Main;
