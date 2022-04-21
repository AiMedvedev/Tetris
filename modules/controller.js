export class Controller {
    constructor(game, view) {
        this.game = game;
        this.view = view;
        this.view.init();
    }
    init(codeKey) {
        window.addEventListener('keydown', event => {
            if (event.code === codeKey) {
                this.view.init();
                this.start();
                this.h1Div.removeChild(this.previewDiv);   
            }
        })
    }

    preview() {
        const previewDiv = document.createElement('div');
        previewDiv.innerHTML = `PRESS <b>ENTER</b> TO START`;
        previewDiv.style.fontSize = '18px';
        previewDiv.style.marginTop = '30px';
        previewDiv.style.color = 'red';
        const h1Div = document.querySelector('body>h1');
        h1Div.append(previewDiv);
    }
 
    start() {
        this.view.showArea(this.game.viewArea);

        setInterval(() => {
            this.game.moveDown();
            this.view.showArea(this.game.viewArea);
        }, 1000)

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
    }
}