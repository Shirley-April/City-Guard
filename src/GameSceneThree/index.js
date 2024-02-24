export default class GameSceneThree extends Phaser.Scene {
  player;

  cursors;

  electricbus;
  cybertruck;
  vehicle;

  constructor() {
    super({ key: "GameSceneThree" });
  }

  preload() {
    this.load.image("electricbus", "assets/electricbus.png");
    this.load.image("cybertruck", "assets/cybertruck.png");
    this.load.image("vehicle", "assets/fuelvehicle.png");

    this.load.image(
      "player",
      "https://content.codecademy.com/courses/learn-phaser/physics/codey.png"
    );

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  create() {
    this.player = this.physics.add.image(450, 300, "player");

    this.electricbus = this.physics.add
      .image(500, 150, "electricbus")
      .setScale(0.5);
    this.cybertruck = this.physics.add
      .image(500, 250, "cybertruck")
      .setScale(0.4);
    this.vehicle = this.physics.add.image(500, 350, "vehicle").setScale(0.5);

    this.physics.add.collider(this.player, this.electricbus, () => {
      this.scene.stop("GameSceneThree");
      this.scene.start("GameSceneTravel");
    });
  }
  update() {
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
    } else {
      this.player.setVelocityY(0);
      this.player.setVelocityX(0);
    }
  }
}
