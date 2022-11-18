type appleObject = {
  x: number;
  y: number;
};

export class Game {

  apple: appleObject;

  constructor(apple: appleObject) {
    this.apple = apple;
  };

  _getRandomInt = () => {
    return Math.floor(Math.random() * (25 - 1) + 1) * 16;
  };

  showApple = () => {
    this.apple.x = this._getRandomInt();
    this.apple.y = this._getRandomInt();
  };
};
