import {startSnakeLength,oneCellSize,gameZoneSize} from '../utils/constants';

export default class Snake {

  constructor(snake, canvasRef, canvasCtxRef) {

    this.snake = snake;
    this._x = snake[0].x;
    this._y = snake[0].y;
    this._directionX = snake[0].directionX;
    this._directionY = snake[0].directionY;
    this.canvasRef = canvasRef;
    this.canvasCtxRef = canvasCtxRef;
  };

  moveSnake = () => {
    this._moveSnakeHead();
    this._x = this._x + this._directionX;
    this._y = this._y + this._directionY;
    this._crossWalls()
  }

  _moveSnakeHead = () => {

    this.snake.unshift({
      x: this._x,
      y: this._y,
      directionX: this._directionX,
      directionY: this._directionY,
    });
    if (this.snake.length > startSnakeLength) {
      this.snake.pop();
    }
  };

  _crossWalls = () => {

    if (this._x === gameZoneSize) {
      this._x = 0;
    } else if (this._x < 0) {
      this._x = gameZoneSize - oneCellSize;
    }
    if (this._y === gameZoneSize) {
      this._y = 0;
    } else if (this._y < 0) {
      this._y = gameZoneSize - oneCellSize;
    }
  }

  addListener = () => {

    window.addEventListener('keydown', (event) => {
      if (event.code === "ArrowUp" && this._directionY === 0) {
        this._directionY = -oneCellSize;
        this._directionX = 0;
      }

      if (event.code === "ArrowDown" && this._directionY === 0) {
        this._directionY = oneCellSize;
        this._directionX = 0;
      }

      if (event.code === "ArrowLeft" && this._directionX === 0) {
        this._directionX = -oneCellSize;
        this._directionY = 0;
      }

      if (event.code === "ArrowRight" && this._directionX === 0) {
        this._directionX = oneCellSize;
        this._directionY = 0;
      }
    });
  }

  renderCanvas = () => {
    if (this.canvasRef.current) {
      this.canvasCtxRef.current = this.canvasRef.current.getContext('2d');
      const ctx = this.canvasCtxRef.current;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = `#3FFE1A`;
      ctx.strokeStyle = `#0b0c0c`;
      ctx.lineWidth=2;
      this.snake.forEach(function({x,y}) {
        ctx.fillRect(x, y, oneCellSize, oneCellSize);
        ctx.strokeRect(x, y, oneCellSize, oneCellSize);
      })
    }
  };
};
