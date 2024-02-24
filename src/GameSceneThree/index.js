export default class GameSceneThree extends Phaser.Scene {
  constructor() {
    super({ key: "GameSceneThree" });
  }

  preload() {}
  create() {
    this.add.text(500, 200, "GAME SCENE THREE", {
      color: "#000000",
      fontSize: 24,
    });
  }
  update() {}
}
