export default class GameSceneTravel extends Phaser.Scene {
  player;

  cursors;

  electricbus;
  cybertruck;
  vehicle;
  activebus;

  constructor() {
    super({ key: "GameSceneTravel" });
  }

  preload() {
    this.load.image("sky", "assets/BG.png");
    this.load.image("city", "assets/city.png");

    this.load.image("activebus", "assets/activebus.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    const firstcity = this.add
      .image(600, height, "city")
      .setOrigin(0, 1)
      .setScrollFactor(3);

    this.add
      .image(firstcity.width, height, "city")
      .setOrigin(0, 1)
      .setScrollFactor(3);

    this.activebus = this.add
      .sprite(200, 600, "activebus")
      .setOrigin(0, 1)
      .setScrollFactor(0.000000015);

    this.cameras.main.setBounds(0, 0, 2048, height);
  }
  update() {
    const cam = this.cameras.main;
    const speed = 5;

    if (this.cursors.right.isDown) {
      cam.scrollX += speed;
    } else if (this.cursors.left.isDown) {
      cam.scrollX -= speed;
    }
  }
}
