import { CUBE } from "../constants";

export class Cell extends Phaser.GameObjects.Container {
  constructor(scene, row, col) {
    super(scene);

    this.width = CUBE.width;
    this.height = CUBE.height;
    this._row = row;
    this._col = col;
    this._cube = null;
  }

  getPosition() {
    const position = {
      x: this._col * (CUBE.width + CUBE.gap) + 15,
      y: this._row * (CUBE.height + CUBE.gap) + 12
    };
    return position;
  }

  addCube(cube) {
    this.add(cube);
    this._cube = cube;
  }
  removeCube() {
    this.remove(this._cube);
    this._cube = null;
  }
  get cube() {
    return this._cube;
  }

  get isEmpty() {
    return !this._cube;
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }
}
