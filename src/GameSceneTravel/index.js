function busDestroyed(bus, enemy, score, scoreText, thisProps) {
  if (bus.body.velocity.x <= 0) {
    bus.destroy();

    thisProps.add
      .text(400, 250, `GAME OVER! ${score}`, {
        fontSize: "54px",
        color: "#000000",
      })
      .setScrollFactor(0);
    thisProps.scene.pause();
  } else {
    score += 50;
    enemy.destroy();
    scoreText.setText(`Game Score ${score}`);
  }
}
export default class GameSceneTravel extends Phaser.Scene {
  player;
  score = 0;
  scoreText;

  cursors;

  electricbus;
  cybertruck;
  vehicle;
  activebus;

  trashmonster;
  trashmonster1;
  trashmonster2;
  trashmonster2;

  constructor() {
    super({ key: "GameSceneTravel" });
  }

  preload() {
    this.load.image("sky", "assets/BG.png");
    this.load.image("city1", "assets/city-view.jpg");

    this.load.image("activebus", "assets/activebus.png");
    this.load.image("trashmonster", "assets/trashmonstor.png");

    this.cursors = this.input.keyboard.createCursorKeys();
  }
  create() {
    const height = this.scale.height;

    const firstcity1 = this.add.image(600, height, "city1").setOrigin(0, 1);

    this.secondcity1 = this.add
      .image(firstcity1.width, height, "city1")
      .setOrigin(0, 1);

    this.activebus = this.physics.add
      .sprite(200, 600, "activebus")
      .setOrigin(0, 1);

    this.trashmonster = this.physics.add
      .image(1000, 500, "trashmonster")
      .setScale(0.5)
      .setVelocityX(-100);

    this.trashmonster1 = this.physics.add
      .image(1000, 500, "trashmonster")
      .setScale(0.5)
      .setVelocityX(-100);

    this.trashmonster2 = this.physics.add
      .image(1900, 500, "trashmonster")
      .setScale(0.5)
      .setVelocityX(-100);

    this.trashmonster3 = this.physics.add
      .image(2800, 500, "trashmonster")
      .setScale(0.5)
      .setVelocityX(-100);

    this.scoreText = this.add
      .text(900, 20, `Game Score ${this.score}`, {
        fontSize: "34px",
        color: "#000000",
      })
      .setScrollFactor(0);

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

    this.physics.add.collider(this.activebus, this.trashmonster, () => {
      busDestroyed(
        this.activebus,
        this.trashmonster,
        this.score,
        this.scoreText,
        this
      );
    });

    this.physics.add.collider(this.activebus, this.trashmonster1, () => {
      busDestroyed(
        this.activebus,
        this.trashmonster1,
        this.score,
        this.scoreText,
        this
      );
    });

    this.physics.add.collider(this.activebus, this.trashmonster2, () => {
      busDestroyed(
        this.activebus,
        this.trashmonster2,
        this.score,
        this.scoreText,
        this
      );
    });

    this.physics.add.collider(this.activebus, this.trashmonster3, () => {
      busDestroyed(
        this.activebus,
        this.trashmonster3,
        this.score,
        this.scoreText,
        this
      );
    });

    this.cameras.main.startFollow(this.activebus);
    this.cameras.main.setBounds(0, 0, 3900, height);
  }
  update() {
    if (!this.activebus || !this.activebus.body) {
      return;
    }

    if (this.cursors.right.isDown) {
      this.activebus.setVelocityX(1000);
    } else if (this.cursors.left.isDown) {
      this.activebus.setVelocityX(-20);
    } else {
      this.activebus.setVelocityX(0);
    }

    if (this.activebus.x > 3600) {
      this.scene.pause();
      this.add
        .text(400, 250, `Your Score! ${this.score}`, {
          fontSize: "54px",
          color: "#000000",
        })
        .setScrollFactor(0);
      this.scene.stop("GameSceneTravel");
      this.scene.start("GameSceneFour");
    }
  }
}
