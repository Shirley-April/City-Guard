function playerDestroyed(player, enemy, count, scoreText, thisProps) {
  if (player.body.velocity.x <= 0) {
    player.destroy();

    thisProps.add
      .text(400, 250, `GAME OVER! ${count}`, {
        fontSize: "54px",
        color: "#000000",
      })
      .setScrollFactor(0);
    thisProps.scene.pause();
  } else {
    count += 50;
    enemy.destroy();
    scoreText.setText(`Game Score ${count}`);
  }
}
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

    // pop up guide
    this.add
      .text(
        10,
        20,
        `Keep moving! 🏃‍♂️\nThe trash monster will kill you if you stand still.`,
        {
          fontSize: "18px",
          color: "#000000",
        }
      )
      .setScrollFactor(0);

    this.physics.add.collider(this.player, this.enemy, () => {
      playerDestroyed(
        this.player,
        this.enemy,
        this.count,
        this.scoreText,
        this
      );
    });
    this.physics.add.collider(this.player, this.enemy1, () => {
      playerDestroyed(
        this.player,
        this.enemy1,
        this.count,
        this.scoreText,
        this
      );
    });
    this.physics.add.collider(this.player, this.enemy2, () => {
      playerDestroyed(
        this.player,
        this.enemy2,
        this.count,
        this.scoreText,
        this
      );
    });

    this.physics.add.collider(this.player, this.enemy3, () => {
      playerDestroyed(
        this.player,
        this.enemy3,
        this.count,
        this.scoreText,
        this
      );
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
      this.add
        .text(400, 250, `Your Score! ${this.count}`, {
          fontSize: "54px",
          color: "#000000",
        })
        .setScrollFactor(0);
    }
  }
}
