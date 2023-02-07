export const ONE_CELL_SIZE = 16;
export const DEFAULT_SNAKE_LENGTH = 4;
export const GAME_ZONE_SIZE = 400;

type TsnakeCoordinate = 0|1;
type TsnakeDirection = 0|1;

export type TsnakeSegment = {
  position: [TsnakeCoordinate, TsnakeCoordinate], // x & y
  direction:[TsnakeDirection, TsnakeDirection],  // x & y
};

type TappleCoordinate = 0|1;

type Tapple = {
  position: [TappleCoordinate, TappleCoordinate], // x & y
};

export const SNAKE_BODY: TsnakeSegment[] = [{
  position: [0,0],
  direction: [0,1],
}];

export const APPLE: Tapple[] = [{
  position: [0,0],
}];
