import Phaser from "./lib/phaser.js";

import GameSceneOne from "./GameSceneOne/index.js";
import GameSceneTwo from "./GameSceneTwo/index.js";
import GameSceneThree from "./GameSceneThree/index.js";
import GameSceneTravel from "./GameSceneTravel/index.js";
import GameSceneFour from "./GameSceneFour/index.js";

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 620,
  backgroundColor: "b9eaff",
  scene: [
    GameSceneOne,
    GameSceneTwo,
    GameSceneThree,
    GameSceneTravel,
    GameSceneFour,
  ],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
};

export default new Phaser.Game(config);
