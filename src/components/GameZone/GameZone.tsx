import {useRef, useEffect} from 'react';
import {snakeBody} from '../../utils/constants';
import Snake from '../../classes/Snake';

const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const snake = new Snake(snakeBody,canvasRef,canvasCtxRef);

  useEffect(() => {

    const interval = setInterval(() => {
      snake.moveSnake();
      snake.renderCanvas();
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
}

export default GameZone;
