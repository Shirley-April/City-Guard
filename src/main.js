import Phaser from "./lib/phaser.js";

import GameSceneOne from "./GameSceneOne/index.js";
import GameSceneTwo from "./GameSceneTwo/index.js";


let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 400,
  backgroundColor: "b9eaff",
  scene: [GameSceneOne, GameSceneTwo]
};

export default new Phaser.Game(config);
