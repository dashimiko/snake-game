import {useRef, useEffect} from 'react';
import {SNAKE_BODY, APPLE} from '../../utils/constants';
import {Game} from '../Game/Game';
import {Snake} from '../Snake/Snake'

export const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const game = new Game(APPLE, SNAKE_BODY, canvasRef, canvasCtxRef);
  const snake = new Snake(SNAKE_BODY);

  game.showApple();

  useEffect(() => {

    const interval = setInterval(() => {
      snake.moveSnake();
      game.renderCanvas();
      game.eatApple();
    }, 100);
    return () => clearInterval(interval);
  }, []);

  snake.addListener();

  return (
    <div className="game_zone">
      <canvas className="canvas"
      ref={canvasRef}
      width={`400px`}
      height={`400px`}/>
    </div>
  );
};
