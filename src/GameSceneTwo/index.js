export default class GameSceneTwo extends Phaser.Scene {
  player;
  cursors;

  trash1;
  trash2;

  score;

  constructor() {
    super({ key: "GameSceneTwo" });
  }

  preload() {
    this.load.image(
      "player",
      "https://content.codecademy.com/courses/learn-phaser/physics/codey.png"
    );

    this.load.image("trash1", "assets/trash1.png");
    this.load.image("trash2", "assets/trash2.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.player = this.physics.add.sprite(200, 300, "player");
    this.trash1 = this.physics.add.image(300, 300, "trash1");
    this.trash2 = this.physics.add.image(400, 300, "trash2");

    this.physics.add.collider(this.player, this.trash1, () => {
      this.trash1.destroy();
    });

    this.physics.add.collider(this.player, this.trash2, () => {
      this.trash2.destroy();
    });
  }
  update() {
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
    } else {
      this.player.setVelocityX(0);
    }
  }
}
