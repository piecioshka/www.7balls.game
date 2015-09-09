import AbstractState from './AbstractState';

class ShenronState extends AbstractState {
    sound = {
        ambienceThunder: null
    };

    preload() {
        super.preload();

        this.load.image('bg-shenron', './assets/graphics/backgrounds/bg-shenron.jpg');
        this.load.audio('sound-ambience-thunder', './assets/sound/dbk/ambience_thunder.ogg');
    }

    create() {
        this.add.image(0, 0, 'bg-shenron');
        this._setupSound();

        this.game.time.events.add(Phaser.Timer.SECOND * 2, this._setupVersus, this);

        this.loadSoundPreferences();
        this.sound.ambienceThunder.play();
    }

    _setupVersus() {
        this.state.start('Versus');
        this.sound.ambienceThunder.stop();
    }

    _setupSound() {
        this.sound.ambienceThunder = this.add.audio('sound-ambience-thunder');
    }

    update() {

    }

    render() {

    }
}

export default ShenronState;
