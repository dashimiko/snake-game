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

  constructor(apple: appleObject, snake: snakeObject[]) {
    this.apple = apple;
    this.snake = snake;
  };

  _getRandomInt = () => {
    return Math.floor(Math.random() * (25 - 1) + 1) * 16;
  };

  showApple = () => {
    this.apple.x = this._getRandomInt();
    this.apple.y = this._getRandomInt();
  };

  isSnakeEatItself = () => {
    return this.snake.slice(1).some(item => this.snake[0].x === item.x && this.snake[0].y === item.y);
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
};
