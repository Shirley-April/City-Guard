export default class GameSceneFour extends Phaser.Scene {
  player;
  enemy;
  count = 0;

  city;

  cursors;
  constructor() {
    super({ key: "GameSceneFour" });
  }

  preload() {
    this.load.image("enemy", "assets/trashmonstor.png");
    this.load.image("player", "assets/man.png");

    this.load.image("city", "assets/city-view.jpg");

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    const height = this.scale.height;

    this.city = this.physics.add.sprite(0, height, "city").setOrigin(0, 1);

    this.city2 = this.physics.add
      .sprite(this.city.width, height, "city")
      .setOrigin(0, 1);

    this.player = this.physics.add.sprite(200, 450, "player").setScale(0.5);

    this.enemy = this.physics.add
      .image(800, 480, "enemy")
      .setScale(0.5)
      .setVelocityX(-300);
    this.enemy1 = this.physics.add
      .image(2000, 480, "enemy")
      .setScale(0.5)
      .setVelocityX(-100);
    this.enemy2 = this.physics.add
      .image(3000, 480, "enemy")
      .setScale(0.5)
      .setVelocityX(-100);

    this.enemy3 = this.physics.add
      .image(4000, 480, "enemy")
      .setScale(0.5)
      .setVelocityX(-100);

    this.scoreText = this.add
      .text(900, 20, `Game Score ${this.count}`, {
        fontSize: "34px",
        color: "#000000",
      })
      .setScrollFactor(0);

    this.physics.add.collider(this.enemy, this.player, () => {
      if (this.player.body.velocity.x <= 0) {
        this.player.destroy();

        this.add
          .text(450, 200, `GAME OVER! ${this.count}`, {
            fontSize: "64px",
            color: "#000000",
          })
          .setScrollFactor(3);
        this.scene.pause();
      } else {
        this.count += 50;
        this.enemy.destroy();
        this.scoreText.setText(`Game Score ${this.count}`);
      }
    });

    this.physics.add.collider(this.player, this.enemy, () => {
      if (this.player.body.velocity.x <= 0) {
        this.player.destroy();

        this.add
          .text(500, 200, `GAME OVERR! ${this.count}`, {
            fontSize: "54px",
            color: "#000000",
          })
          .setScrollFactor(0);
        this.scene.pause();
      } else {
        this.count += 50;
        this.enemy.destroy();
        this.scoreText.setText(`Game Score ${this.count}`);
      }
    });
    this.physics.add.collider(this.player, this.enemy1, () => {
      if (this.player.body.velocity.x <= 0) {
        this.player.destroy();

        this.add.text(500, 200, `GAME OVERR! ${this.count}`, {
          fontSize: "54px",
          color: "#000000",
        });
        this.scene.pause();
      } else {
        this.count += 50;
        this.enemy1.destroy();
        this.scoreText.setText(`Game Score ${this.count}`);
      }
    });
    this.physics.add.collider(this.player, this.enemy2, () => {
      if (this.player.body.velocity.x <= 0) {
        this.player.destroy();

        this.add.text(500, 200, `GAME OVERR! ${this.count}`, {
          fontSize: "54px",
          color: "#000000",
        });
        this.scene.pause();
      } else {
        this.count += 50;
        this.enemy2.destroy();
        this.scoreText.setText(`Game Score ${this.count}`);
      }
    });

    this.physics.add.collider(this.player, this.enemy3, () => {
      if (this.player.body.velocity.x <= 0) {
        this.player.destroy();

        this.add.text(500, 200, `GAME OVERR! ${this.count}`, {
          fontSize: "54px",
          color: "#000000",
        });
        this.scene.pause();
      } else {
        this.count += 50;
        this.enemy3.destroy();
        this.scoreText.setText(`Game Score ${this.count}`);
      }
    });

    this.cameras.main.startFollow(this.player);
    this.cameras.main.setBounds(0, 0, 4000, height);
  }

  update() {
    if (!this.player || !this.player.body) {
      return;
    }

    if (this.player) {
      if (this.cursors.right.isDown) {
        this.player.setVelocityX(1000);
      } else if (this.cursors.left.isDown) {
        this.player.setVelocityX(-100);
      } else {
        this.player.setVelocityX(0);
      }
    } else {
      return;
    }

    if (this.player.x > 3750) {
      this.scene.pause();
    }
  }
}
