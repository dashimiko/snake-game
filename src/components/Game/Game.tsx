import {useRef, useEffect, useState} from 'react';
import {
  oneCellSize,
  startSnakeLength,
  gameZone,
  snake,
} from '../../utils/constants';

const Game = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [fieldCellX, setFieldCellX] = useState(oneCellSize);
  const [fieldCellY, setFieldCellY] = useState(0);

  useEffect(() => {

    const interval = setInterval(function moveSnake() {

      setPositionX(positionX + fieldCellX);
      setPositionY(positionY + fieldCellY);

      snake.unshift({x:positionX, y:positionY, maxLength: startSnakeLength});

      if (snake.length > startSnakeLength) {
        snake.pop();
      }
      if (positionX > gameZone) {
        setPositionX(0);
      } else if (positionX < 0) {
        setPositionX(gameZone);
      }
      if (positionY > gameZone) {
        setPositionY(0);
      } else if (positionY < 0) {
        setPositionY(gameZone);
      }
    }, 100);

    return () => clearInterval(interval);

  }, [positionX, fieldCellX, positionY, fieldCellY]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx!.fillStyle = `#3FFE1A`;
      ctx!.strokeStyle = `#0b0c0c`;
      ctx!.lineWidth=2;
      snake.forEach(function({x,y}) {
        ctx!.fillRect(x, y, 15, 15);
        ctx!.strokeRect(x, y, 15, 15);
      });
    }
  }, [positionX, positionY]);

document.addEventListener('keydown', function(event) {
  if (event.code === "ArrowUp") {
    setFieldCellY(-oneCellSize);
    setFieldCellX(0);
    console.log(snake)
  }

  else if (event.code === "ArrowDown") {
    setFieldCellY(oneCellSize);
    setFieldCellX(0);
  }

  else if (event.code === "ArrowLeft") {
    setFieldCellX(-oneCellSize);
    setFieldCellY(0);
  }

  else if (event.code === "ArrowRight") {
    setFieldCellX(oneCellSize);
    setFieldCellY(0);
  }
});

  return (
    <div className="game_zone">
      <canvas className="canvas"
      ref={canvasRef}
      width={`400px`}
      height={`400px`}/>
    </div>
  );
}

export default Game;
