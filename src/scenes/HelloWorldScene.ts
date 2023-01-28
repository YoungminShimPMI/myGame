import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
    private player?: Phaser.Physics.Arcade.Sprite
    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

	constructor()
	{
		super('main')
	}

	preload()
    {
        this.load.image('background', 'assets/Background.png')
        this.load.spritesheet('character', 'assets/character/spritesheets/Elementals_leaf_ranger_288x128_SpriteSheet.png', {
            frameWidth: 288, frameHeight: 128,
        })
        this.load.spritesheet('character2', 'assets/character/spritesheets/Elementals_leaf_ranger_288x128_SpriteSheet2.png', {
            frameWidth: 288, frameHeight: 128,
        })
    }

    create()
    {
        // 배경화면
        const {x, y, width, height} = this.cameras.main;
        this.add.tileSprite(x, y, width, height,'background')
            .setOrigin(0).setScrollFactor(0,1);

        // 플레이어
        this.player = this.physics.add.sprite(200, 750, 'character')
            .setBounce(0.2).setCollideWorldBounds(true)

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('character2', { start: 44, end: 34 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('character', { start: 22, end: 31 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('character', { start: 0, end: 11 }),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: 'space',
            frames: this.anims.generateFrameNumbers('character', { start: 48, end: 68 }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if (!this.cursors) return
        if (this.cursors.right.isDown) {
            this.player?.setVelocityX(160)
            this.player?.anims.play('right', true)
        } else if (this.cursors.left.isDown) {
            this.player?.setVelocityX(-160)
            this.player?.anims.play('left', true)
        } else {
            this.player?.setVelocityX(0)
            this.player?.anims.play('turn', true)
        }

         if (this.cursors.space.isDown) {
            this.player?.setVelocityY (-330)
            this.player?.anims.play('space', true)
        }
    }
}
