export default class GameSceneTwo extends Phaser.Scene {
  constructor() {
    super({ key: "GameSceneTwo" });
  }

  preload() {
    this.load.image(
      "player",
      "https://content.codecademy.com/courses/learn-phaser/physics/codey.png"
    );
  }
  create() {
    this.add.image(200, 300, "player");
  }
  update() {}
}
