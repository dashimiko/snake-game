import {useRef, useEffect, useState} from 'react';
import {
  oneCellSize,
  startSnakeLength,
  gameZone,
  startSnake,
} from '../../utils/constants';

const Game = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [fieldCellX, setFieldCellX] = useState(oneCellSize);
  const [fieldCellY, setFieldCellY] = useState(0);
  const [snakeBody, setSnakeBody] = useState([startSnake]);

  //eslint-disable-next-line react-hooks/exhaustive-deps
  function moveSnake() {

    setPositionX(positionX + fieldCellX);
    setPositionY(positionY + fieldCellY);

    snakeBody.unshift({x:positionX, y:positionY, maxLength: startSnakeLength});

    if (snakeBody.length > startSnake.maxLength) {
      snakeBody.pop();
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
  }

  useEffect(() => {
    const interval = setInterval(moveSnake, 100);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx!.fillStyle = `#3FFE1A`;
      snakeBody.forEach(({x,y}) => ctx!.fillRect(x, y, 20, 20))
    }
  }, [positionX, positionY, snakeBody]);

document.addEventListener('keydown', function(event) {
  if (event.code === "ArrowUp") {
    setFieldCellY(-oneCellSize);
    setFieldCellX(0);
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
