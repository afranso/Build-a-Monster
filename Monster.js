class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.rightlegX = 400;
        this.rightlegY = 440;
        this.leftlegX = 200;
        this.leftlegY = 450;
        this.eyeX = 300;
        this.eyeY = 335;
        this.rightarmX = 400;
        this.rightarmY = 360;
        this.rightleftX = 200;
        this.rightleftY = 360;
        this.mouthX = 300;
        this.mouthY = 380;
        this.detail1X = 350;
        this.detail1Y = 275;
        this.detail2X = 250;
        this.detail2Y = 260;
        this.fangX = 300;
        this.fangY = 380;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightleg = this.add.sprite(this.rightlegX, this.rightlegY, "monsterParts", "leg_blueB.png");
        my.sprite.leftleg = this.add.sprite(this.leftlegX, this.leftlegY, "monsterParts", "leg_redC.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_angry_blue.png");
        my.sprite.rightarm = this.add.sprite(this.rightarmX, this.rightarmY, "monsterParts", "arm_yellowA.png");
        my.sprite.leftarm = this.add.sprite(this.rightleftX, this.rightleftY, "monsterParts", "arm_darkA.png");
        my.sprite.leftarm.flipX = true;
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthC.png");
        my.sprite.detail1 = this.add.sprite(this.detail1X, this.detail1Y, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.detail2 = this.add.sprite(this.detail2X, this.detail2Y, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.detail2.flipX = true;
        my.sprite.fang = this.add.sprite(this.fangX, this.fangY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;

        this.cursors = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
        
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        });
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        });

        if (this.cursors.left.isDown) {
            for (let key in my.sprite) {
                my.sprite[key].x -= 1;  // adjust speed here
            }
        }
        if (this.cursors.right.isDown) {
            for (let key in my.sprite) {
                my.sprite[key].x += 1;
            }
        }
        
       
    }

}