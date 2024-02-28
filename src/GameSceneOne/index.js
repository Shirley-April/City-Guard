export default class GameSceneOne extends Phaser.Scene {
  cursors;
  constructor() {
    super({ key: "GameSceneOne" });
  }

  preload() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add.text(
      300,
      200,
      "=== Game Instructions ===\n \nStart the game: Press the down arrow\nMove characters: Use the left and right arrows",
      {
        color: "#000000",
        fontSize: 24,
      }
    );
  }

  update() {
    if (this.cursors.down.isDown) {
      this.scene.stop("GameSceneOne");
      this.scene.start("GameSceneTwo");
    }
  }
}
