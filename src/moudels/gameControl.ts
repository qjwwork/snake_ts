import './food'
import Food from './food'
import './scoreboard'
import ScoreBoard from './scoreboard';
import './snake'
import Snake from './snake';
class GameControl {
    food: Food;
    scoreboard: ScoreBoard;
    snake: Snake;
    direction: string = '';
    olddirection: string = ''
    isLive: boolean = true

    constructor() {
        this.food = new Food();
        this.scoreboard = new ScoreBoard();
        this.snake = new Snake();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.controlDerection.bind(this));
        this.run(this.olddirection);

    }
    controlDerection(event: KeyboardEvent) {
        this.olddirection = this.direction
        this.direction = event.key;
        console.log(this.direction);

    }


    run(olddirection:String) {

        // if (this.direction === this.olddirection) return;
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                if(this.olddirection === "ArrowDown"&& this.snake.snakeBody[1]){this.direction="ArrowDown";break}
                // if (this.direction === this.olddirection) return;
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                if(this.olddirection ==="ArrowUp"&& this.snake.snakeBody[1]){this.direction="ArrowUp";break}
                // if (this.direction === this.olddirection) return;
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                if(this.olddirection ==="ArrowRight"&& this.snake.snakeBody[1]){this.direction="ArrowRight";break}
                // if (this.direction === this.olddirection) return;
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                if(this.olddirection === "ArrowLeft"&& this.snake.snakeBody[1]){this.direction="ArrowLeft";break}
                // if (this.direction === this.olddirection) return;
                X += 10
                break;

        }
        // console.log(this.direction);
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scoreboard.level - 1) * 30);

        this.checkEat(X, Y);
        this.snake.moveBody();

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert('You dead! GAME OVER!');
            this.isLive = false;
        }
    }

    checkEat(X: number, Y: number) {
        if (X == this.food.X && Y == this.food.Y) {
            this.scoreboard.addScore();
            this.food.change();
            this.snake.addBody();
            this.snake.checkEatBody();


        }


    }





}

export default GameControl;