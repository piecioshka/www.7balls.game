let { loadSoundPreferences } = require('../../helpers/audio');

/**
 * @extends Phaser.State
 */
export default class WinnerState extends Phaser.State {
    audio = {
        thing1: null
    };

    create() {
        ga('send', 'event', 'game', 'win');

        this.add.image(0, 0, 'bg-winner');
        this.add.button(370, this.game.height / 2, 'btn-try-again', this._tryAgain, this);

        this._setupKeyboard();
        this._setupSound();

        loadSoundPreferences(this.game);

        this.audio.thing1.play();
    }

    _setupKeyboard() {
        let enter = this.input.keyboard.addKey(Phaser.Keyboard.ENTER);

        // Stop the following keys from propagating up to the browser.
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.ENTER
        ]);

        enter.onDown.add(() => this._tryAgain());
    }

    _tryAgain() {
        ga('send', 'event', 'game', 'win-try-again');

        this.audio.thing1.stop();
        this.state.start('SelectCharacter');
    }

    _setupSound() {
        this.audio.thing1 = this.add.audio('sound-thing1');
    }
}
