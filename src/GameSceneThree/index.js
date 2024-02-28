function startSceneTravel(props) {
  props.scene.stop("GameSceneThree");
  setTimeout(() => {
    props.scene.start("GameSceneTravel");
  }, 300);
}
export default class GameSceneThree extends Phaser.Scene {
  player1;

  cursors;

  electricbus;
  cybertruck;
  vehicle;

  keyB;
  keyC;
  keyN;

  constructor() {
    super({ key: "GameSceneThree" });
  }

  preload() {
    this.load.image("city", "assets/city-view.jpg");
    this.load.image("electricbus", "assets/electricbus.png");
    this.load.image("cybertruck", "assets/cybertruck.png");
    this.load.image("vehicle", "assets/fuelvehicle.png");
    this.load.image("selectionPopUp", "assets/selectionText.PNG");
    this.load.image("player1", "assets/man.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  create() {
    const height = this.scale.height;

    this.city = this.add.image(600, height, "city").setOrigin(0, 1);
    this.electricbus = this.physics.add.image(400, 500, "electricbus");
    this.cybertruck = this.physics.add.image(900, 500, "cybertruck");

    this.vehicle = this.physics.add.image(1400, 500, "vehicle");

    this.player1 = this.physics.add.image(100, 500, "player1").setScale(0.3);
    this.selectionPopUp = this.physics.add
      .image(300, 100, "selectionPopUp")
      .setScale(1);

    this.keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
    this.keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

    this.cameras.main.startFollow(this.player1);
    this.cameras.main.setBounds(0, 0, 2500, height);
  }
  update() {
    if (this.cursors.right.isDown) {
      this.player1.setVelocityX(400);
    } else if (this.cursors.left.isDown) {
      this.player1.setVelocityX(-400);
    } else if (this.cursors.up.isDown) {
      this.player1.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player1.setVelocityY(100);
    } else {
      this.player1.setVelocityY(0);
      this.player1.setVelocityX(0);
    }

    if (this.keyB.isDown) {
      startSceneTravel(this);
    }
    if (this.keyC.isDown) {
      startSceneTravel(this);
    }
    if (this.keyN.isDown) {
      startSceneTravel(this);
    }
  }
}
