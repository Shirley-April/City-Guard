export default class GameSceneTwo extends Phaser.Scene {
  player;
  cursors;

  trash1;
  trash2;
  dustbin;

  score = 0;
  scoreText;

  constructor() {
    super({ key: "GameSceneTwo" });
  }

  preload() {
    this.load.image("player", "assets/man.png");

    this.load.image("city", "assets/city-view.jpg");

    this.load.image("trash1", "assets/trashbag.PNG");
    this.load.image("trash2", "assets/trash2.png");
    this.load.image("dustbin", "assets/dustbin.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.city = this.physics.add.sprite(250, 280, "city");

    this.player = this.physics.add.sprite(200, 500, "player").setScale(0.3);
    this.trash1 = this.physics.add.image(450, 550, "trash1");
    this.trash2 = this.physics.add.image(550, 550, "trash1");
    this.dustbin = this.physics.add.image(1050, 500, "dustbin");

    this.scoreText = this.add.text(900, 20, `Game Score ${this.score}`, {
      fontSize: "34px",
      color: "#000000",
    });

    this.physics.add.collider(this.player, this.trash1, () => {
      this.trash1.destroy();
      this.score += 10;
      this.scoreText.setText(`Game Score ${this.score}`);
    });

    this.physics.add.collider(this.player, this.trash2, () => {
      this.trash2.destroy();
      this.score += 10;
      this.scoreText.setText(`Game Score ${this.score}`);
    });

    this.physics.add.collider(this.player, this.dustbin, () => {
      this.score += 100;
      this.scoreText.setText(`Game Score ${this.score}`);

      this.scene.stop("GameSceneTwo");
      this.scene.start("GameSceneThree");
    });
  }
  update() {
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    } else {
      this.player.setVelocityX(0);
    }
  }
}
