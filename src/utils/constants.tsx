export const ONE_CELL_SIZE = 16;
export const DEFAULT_SNAKE_LENGTH = 4;
export const GAME_ZONE_SIZE = 400;
export const SNAKE_BODY = [{
  x: 48,
  y: 0,
  directionX: ONE_CELL_SIZE,
  directionY: 0,
  size: DEFAULT_SNAKE_LENGTH,
},{
  x: 32,
  y: 0,
  directionX: ONE_CELL_SIZE,
  directionY: 0,
  size: DEFAULT_SNAKE_LENGTH,
},{
  x: 16,
  y: 0,
  directionX: ONE_CELL_SIZE,
  directionY: 0,
  size: DEFAULT_SNAKE_LENGTH,
},{
  x: 0,
  y: 0,
  directionX: ONE_CELL_SIZE,
  directionY: 0,
  size: DEFAULT_SNAKE_LENGTH,
}];

export const APPLE = {
  x: 96,
  y: 320,
}

type snakeObject = {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
};

export const countLenght = (arr: snakeObject[]) => {
  arr.length = 4;
}
