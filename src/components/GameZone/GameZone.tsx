import {useRef, useEffect} from 'react';
import {snakeBody, oneCellSize} from '../../utils/constants';
import Snake from '../../classes/Snake';

const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const snake = new Snake(snakeBody);

  useEffect(() => {

    const interval = setInterval(() => {
      snake.moveSnake();
      if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        const ctx = canvasCtxRef.current;
        ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx!.fillStyle = `#3FFE1A`;
        ctx!.strokeStyle = `#0b0c0c`;
        ctx!.lineWidth=2;
        snakeBody.forEach(function({x,y}) {
          ctx!.fillRect(x, y, oneCellSize, oneCellSize);
          ctx!.strokeRect(x, y, oneCellSize, oneCellSize);
        })
      }
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
