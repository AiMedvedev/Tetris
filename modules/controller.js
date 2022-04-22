export class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
    }
    init(codeKey) {
        window.addEventListener('keydown', event => {
            if (event.code === codeKey) {
                this.view.init();
                this.start();
            }
        })
    }
 
    start() {
        this.view.showArea(this.game.viewArea);

        this.view.createBlockScore();
        this.view.createBlockNextTetromino();

        const showScore = this.view.createBlockScore();
        const showNextTetromino = this.view.createBlockNextTetromino();
        this.game.createUpdatePanels(showScore, showNextTetromino);

        const tick = () => {
            const time = (1100 - 100 * this.game.level);
            
            if (this.game.gameOver) return;

            setTimeout(() => {
                this.game.moveDown();
                this.view.showArea(this.game.viewArea);
                tick();
            }, time > 100 ? time : 100);
        }

        tick();

        window.addEventListener('keydown', (e) => {
            const key = e.code;
        
            switch (key) {
                case 'ArrowLeft':
                    this.game.moveLeft();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowRight':
                    this.game.moveRight();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowDown':
                    this.game.moveDown();
                    this.view.showArea(this.game.viewArea);
                    break;
                case 'ArrowUp':
                    this.game.rotateTetromino();
                    this.view.showArea(this.game.viewArea);
                    break;
            }
        });

        /* if (this.game.gameOver) {
            this.container.textContent = `
            GAME OVER <br>
            Press "ENTER" <br> to start New Game
            `;
            this.view.preview();
        } */
    }
}