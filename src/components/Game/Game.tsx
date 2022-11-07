import React, {useRef, useEffect, useState} from 'react';

const Game = () => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const [fieldCellX, setFieldCellX] = useState(15);
  const [fieldCellY, setFieldCellY] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function moveSnake() {
    setPositionX(positionX + fieldCellX);
    setPositionY(positionY + fieldCellY);

    if (positionX > 400) {
      setPositionX(0);
    } else if (positionX < 0) {
      setPositionX(400);
    }

    if (positionY > 400) {
      setPositionY(0);
    } else if (positionY < 0) {
      setPositionY(400);
    }
  }

  useEffect(() => {
    const interval = setInterval(moveSnake, 300);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext('2d');
      const ctx = canvasCtxRef.current;
      ctx!.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx!.fillStyle = `#3FFE1A`;
      ctx!.fillRect(positionX, positionY, 20, 20);
    }
  }, [positionX, positionY]);

document.addEventListener('keydown', function(event) {
  if (event.code === "ArrowUp") {
    setFieldCellY(-15);
    setFieldCellX(0);
  }

  if (event.code === "ArrowDown") {
    setFieldCellY(15);
    setFieldCellX(0);
  }

  if (event.code === "ArrowLeft") {
    setFieldCellX(-15);
    setFieldCellY(0);
  }

  if (event.code === "ArrowRight") {
    setFieldCellX(15);
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
