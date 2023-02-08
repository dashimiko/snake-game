const ONE_CELL_SIZE = 16;
const DEFAULT_SNAKE_LENGTH = 4;
const GAME_ZONE_SIZE = 400;

type TsnakeCoordinate = 0|1;
type TsnakeDirection = 0|1;
type TappleCoordinate = 0|1;

type TsnakeSegment = {
  position: [TsnakeCoordinate, TsnakeCoordinate], // x & y
  direction:[TsnakeDirection, TsnakeDirection],  // x & y
};

type Tapple = {
  position: [TappleCoordinate, TappleCoordinate], // x & y
};

const SNAKE_BODY: TsnakeSegment[] = [{
  position: [0,0],
  direction: [0,1],
}];

const APPLE: Tapple[] = [{
  position: [0,0],
}];

export {
  ONE_CELL_SIZE,
  DEFAULT_SNAKE_LENGTH,
  GAME_ZONE_SIZE,
  SNAKE_BODY,
  APPLE,
}
