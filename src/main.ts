import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 928,
	height: 793,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
			debug: true
		}
	},
	scale: {
		mode:Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 928,
		height: 793,
	},
	scene: [HelloWorldScene]
}

export default new Phaser.Game(config)
