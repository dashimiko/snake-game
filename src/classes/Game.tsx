export default class Game {
  title: string;
  artist: string;
  isLiked: boolean;

  constructor(title: string, artist: string) {
      this.title = title;
      this.artist = artist;
      this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}
