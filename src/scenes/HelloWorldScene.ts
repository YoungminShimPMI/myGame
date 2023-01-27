import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
    private player?: Phaser.Physics.Arcade.Sprite

	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('background', 'assets/Background.png')
        this.load.spritesheet('character', 'assets/spritesheets/Elementals_leaf_ranger_288x128_SpriteSheet.png', {
            frameWidth: 64, frameHeight: 128
        })
    }

    create()
    {
        this.add.image(400, 300, 'background')

        this.player = this.physics.add.sprite(200, 450, 'character')
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('character', {
                start: 0, end: 6
            }),
            frameRate: 10,
            repeat: -1
        })
    }
}
