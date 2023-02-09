import {TsnakeSegment, TsnakeCoordinate, TsnakeDirection, ONE_CELL_SIZE} from '../Constants/constants';

export class Snake {

  snake: TsnakeSegment[];
  position: TsnakeCoordinate;
  direction: TsnakeDirection;

  constructor(snake: TsnakeSegment[]) {
    this.snake = snake;
    this.position = snake[0].position;
    this.direction = snake[0].direction;
  };

  moveSnake = () => {
    //this.position = //тут хочется прибавить к
    //изначальной координате x змеи размер одной клетки
    //но так не получается;
    this._moveSnakeHead();
  };

  _moveSnakeHead = () => {
    this.snake.unshift({
      position: this.position,
      direction: this.direction,
    });

    this.snake.pop();
  };
};
