import Configuration from '../../configuration';
import FightState from './FightState';

class TrainingState extends FightState {
    keyboard = {
        x: null,
        c: null,
        up: null,
        space: null
    };
    sound = {
        jump: null,

        weakkick: null,
        weakpunch: null,

        mediumkick: null,
        mediumpunch: null,

        strongkick: null,
        strongpunch: null
    };
    options = {
        player: {
            hp: null,
            exp: null,
            lvl: null
        }
    };

    preload() {
        super.preload();

        this.load.image('bg-training-capsule', './assets/graphics/backgrounds/bg-training-capsule.jpg');
    }

    create() {
        this.add.image(0, 0, 'bg-training-capsule');

        this._setupWorld();
        this._setupKeyboard();
        this._setupSound();

        this._setupSprite(150, 360, this.game.player);
        this._setupPlayerOptions();

        this.displayLogo();
        this.displayCentralMessage({ text: 'Start your training!' });

        this.loadSoundPreferences();
    }

    update() {
        super.update();
    }

    render() {
        // let player = this.game.player;
        // this.game.debug.bodyInfo(player.phaser, 25, 25);
        // this.game.debug.body(player.phaser);
    }
}

export default TrainingState;
