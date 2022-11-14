import {useRef, useEffect, useState} from 'react';
import {
  oneCellSize,
  startSnakeLength,
  gameZoneSize,
  snakeObj,
} from '../../utils/constants';

import Snake from '../../classes/Snake';

const song = new Snake('Start Over', 'Any Given Day');
const song2 = new Snake('Bitter End', 'The Veer Union');

console.log(song)
console.log(song2)

const GameZone = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [directionX, setDirectionX] = useState(oneCellSize);
  const [directionY, setDirectionY] = useState(0);

  useEffect(() => {

    const interval = setInterval(function moveSnake() {

      setPositionX(positionX + directionX);
      setPositionY(positionY + directionY);

      snakeObj.unshift({
        x: positionX,
        y: positionY,
        directionX: directionX,
        directionY: directionY,
      });

      if (snakeObj.length > startSnakeLength) {
        snakeObj.pop();
      }

      if (positionX === gameZoneSize) {
        setPositionX(0);
      } else if (positionX < 0) {
        setPositionX(gameZoneSize - oneCellSize);
      }
      if (positionY === gameZoneSize) {
        setPositionY(0);
      } else if (positionY < 0) {
        setPositionY(gameZoneSize - oneCellSize);
      }
    }, 100);

    return () => clearInterval(interval);

  }, [positionX, directionX, positionY, directionY]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx!.fillStyle = `#3FFE1A`;
      ctx!.strokeStyle = `#0b0c0c`;
      ctx!.lineWidth=2;
      snakeObj.forEach(function({x,y}) {
        ctx!.fillRect(x, y, oneCellSize, oneCellSize);
        ctx!.strokeRect(x, y, oneCellSize, oneCellSize);
      });
    }
  }, [positionX, positionY]);

window.addEventListener('keydown', function(event) {
  if (event.code === "ArrowUp" && snakeObj[0].directionY === 0) {
    setDirectionY(-oneCellSize);
    setDirectionX(0);
  }

  if (event.code === "ArrowDown" && snakeObj[0].directionY === 0) {
    setDirectionY(oneCellSize);
    setDirectionX(0);
  }

  if (event.code === "ArrowLeft" && snakeObj[0].directionX === 0) {
    setDirectionX(-oneCellSize);
    setDirectionY(0);
  }

  if (event.code === "ArrowRight" && snakeObj[0].directionX === 0) {
    setDirectionX(oneCellSize);
    setDirectionY(0);
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

export default GameZone;
