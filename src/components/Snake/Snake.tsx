import {ONE_CELL_SIZE,GAME_ZONE_SIZE} from '../../utils/constants';

type snakeObject = {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
};

export class Snake {

  _x: number;
  _y: number;
  _directionX: number;
  _directionY: number;
  snake: snakeObject[];

  constructor(snake: snakeObject[]) {

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
  };

  _moveSnakeHead = () => {
    this.snake.unshift({
      x: this._x,
      y: this._y,
      directionX: this._directionX,
      directionY: this._directionY,
      size: this.snake[0].size,
    });
    if (this.snake.length > this.snake[0].size) {
      this.snake.pop();
    }
  };

  _crossWalls = () => {
    if (this._x === GAME_ZONE_SIZE) {
      this._x = 0;
    } else if (this._x < 0) {
      this._x = GAME_ZONE_SIZE - ONE_CELL_SIZE;
    }
    if (this._y === GAME_ZONE_SIZE) {
      this._y = 0;
    } else if (this._y < 0) {
      this._y = GAME_ZONE_SIZE - ONE_CELL_SIZE;
    }
  };

  _changeDirection = (event: KeyboardEvent) => {
    if (event.code === "ArrowUp" && this._directionY === 0) {
      this._directionY = -ONE_CELL_SIZE;
      this._directionX = 0;
    }
    if (event.code === "ArrowDown" && this._directionY === 0) {
      this._directionY = ONE_CELL_SIZE;
      this._directionX = 0;
    }
    if (event.code === "ArrowLeft" && this._directionX === 0) {
      this._directionX = -ONE_CELL_SIZE;
      this._directionY = 0;
    }
    if (event.code === "ArrowRight" && this._directionX === 0) {
      this._directionX = ONE_CELL_SIZE;
      this._directionY = 0;
    }
  };

  addListener = () => {
    window.addEventListener('keydown', this._changeDirection);
  };
};