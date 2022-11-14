import {useRef, useEffect} from 'react';
import {snakeObj} from '../../utils/constants';
import Snake from '../../classes/Snake';

const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const snake = new Snake(snakeObj,canvasRef,canvasCtxRef);

  useEffect(() => {

    const interval = setInterval(function go() {
      snake.moveSnake();
      snake.renderCanvas();
    }, 100);

    return () => clearInterval(interval);

  }, [snake]);

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
