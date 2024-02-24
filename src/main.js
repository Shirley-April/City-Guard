import Phaser from "./lib/phaser.js";

import GameSceneOne from "./GameSceneOne/index.js";
import GameSceneTwo from "./GameSceneTwo/index.js";
import GameSceneThree from "./GameSceneThree/index.js";

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 400,
  backgroundColor: "b9eaff",
  scene: [GameSceneOne, GameSceneTwo, GameSceneThree],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

export default new Phaser.Game(config);
