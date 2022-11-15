import {startSnakeLength,oneCellSize,gameZoneSize} from '../utils/constants';

export default class Snake {

  _x: number;
  _y: number;
  _directionX: number;
  _directionY: number;
  snake: any[];

  constructor(snake: any[]) {

    this.snake = snake;
    this._x = snake[0].x;
    this._y = snake[0].y;
    this._directionX = snake[0].directionX;
    this._directionY = snake[0].directionY;
  };

  moveSnake = () => {
    this._moveSnakeHead();
    this._x = this._x + this._directionX;
    this._y = this._y + this._directionY;
    this._crossWalls();
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
};
