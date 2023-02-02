import {useRef, useEffect, useState} from 'react';
import {SNAKE_BODY, APPLE} from '../../utils/constants';
import {Game} from '../Game/Game';
import {Snake} from '../Snake/Snake';

export const Main = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const game = new Game(APPLE, SNAKE_BODY, canvasRef, canvasCtxRef);
  const snake = new Snake(SNAKE_BODY);
  const [gameOver,setGameOver] = useState(false);

  function handleButtonClick() {
    setGameOver(false);
  }

  game.showApple();

  useEffect(() => {

    game.renderCanvas();

    const intervalGame = setInterval(() => {
      if(game.isSnakeEatItself()){
        setGameOver(true);
        SNAKE_BODY[0].size = 4;
        snake.newSnake();
    }
      snake.moveSnake();
      game.renderCanvas();
      game.eatApple();

    }, 100);

    return () => clearInterval(intervalGame);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  snake.addListener();

  return (
    <div className="game-zone">
      <div className="game-zone_box">
      {gameOver
        ?
        <>
          <p className="glitch game-zone__game-over">GAME OVER</p>
          <button className="start_button game-zone__again" onClick={handleButtonClick}>
            <p className='start_button_text'>Again?</p>
          </button>
        </>
        :
        <canvas className="canvas"
        ref={canvasRef}
        width={`400px`}
        height={`400px`}/> }
      </div>
    </div>
  );
};
