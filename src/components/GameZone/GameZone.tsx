import {useRef, useEffect} from 'react';
import {SNAKE_BODY,ONE_CELL_SIZE, APPLE} from '../../utils/constants';
import {Game} from '../Game/Game';
import {Snake} from '../Snake/Snake'

export const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const game = new Game(APPLE, SNAKE_BODY);
  const snake = new Snake(SNAKE_BODY);

  game.showApple();

  useEffect(() => {

    const interval = setInterval(() => {

      snake.moveSnake();
      game.eatApple();

      if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        const ctx = canvasCtxRef.current;
        ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx!.fillStyle = 'red';
        ctx!.fillRect(APPLE.x, APPLE.y, ONE_CELL_SIZE - 2, ONE_CELL_SIZE - 2);
        ctx!.fillStyle = `#3FFE1A`;
        ctx!.strokeStyle = `#0b0c0c`;
        ctx!.lineWidth=2;
        SNAKE_BODY.forEach(function({x,y}) {
          ctx!.fillRect(x, y, ONE_CELL_SIZE, ONE_CELL_SIZE);
          ctx!.strokeRect(x, y, ONE_CELL_SIZE, ONE_CELL_SIZE);
        })
      };
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
