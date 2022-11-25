import {ONE_CELL_SIZE} from '../../utils/constants';

type appleObject = {
  x: number;
  y: number;
};

type snakeObject = {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
};

export class Game {

  apple: appleObject;
  snake: snakeObject[];
  canvasRef: any;
  canvasCtxRef: any;

  constructor(apple: appleObject, snake: snakeObject[], canvasRef: any, canvasCtxRef: any) {
    this.apple = apple;
    this.snake = snake;
    this.canvasRef = canvasRef;
    this.canvasCtxRef = canvasCtxRef;
  };

  _getRandomInt = () => {
    return Math.floor(Math.random() * (25 - 1) + 1) * 16;
  };

  showApple = () => {
    this.apple.x = this._getRandomInt();
    this.apple.y = this._getRandomInt();
  };

  isSnakeEatItself = () => {
    if(this.snake.length > 5) {
      return this.snake.slice(1).some(item => this.snake[0].x === item.x && this.snake[0].y === item.y);
    }
  };

  _lengthenSnake = () => {
    this.snake[0].size += 1;
  };

  eatApple = () => {
    if (this.snake[0].x === this.apple.x && this.snake[0].y === this.apple.y) {
      this._lengthenSnake();
      this.showApple();
    }
  };

  renderCanvas = () => {
    if (this.canvasRef.current) {
      this.canvasCtxRef.current = this.canvasRef.current.getContext('2d');
      const ctx = this.canvasCtxRef.current;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = 'red';
      ctx.fillRect(this.apple.x, this.apple.y, ONE_CELL_SIZE - 2, ONE_CELL_SIZE - 2);
      ctx.fillStyle = `#3FFE1A`;
      ctx.strokeStyle = `#0b0c0c`;
      ctx.lineWidth=2;
      this.snake.forEach(function({x,y}) {
        ctx.fillRect(x, y, ONE_CELL_SIZE, ONE_CELL_SIZE);
        ctx.strokeRect(x, y, ONE_CELL_SIZE, ONE_CELL_SIZE);
      })
    };
  }
};
