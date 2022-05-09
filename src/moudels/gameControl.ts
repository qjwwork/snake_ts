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
    isLive:boolean=true

    constructor() {
        this.food = new Food();
        this.scoreboard = new ScoreBoard();
        this.snake = new Snake();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.controlDerection.bind(this));
        this.run();

    }
    controlDerection(event: KeyboardEvent) {

        this.direction = event.key;
        console.log(this.direction);

    }
    
    run(){
        let X=this.snake.X;
        let Y=this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                this.snake.Y-=10;
                break;
            case "ArrowDown":
            case "Down":
                this.snake.Y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                this.snake.X-=10;
                break;
            case "ArrowRight":
            case "Right":
                this.snake.X+=10
                break;
        }
        // console.log(this.direction);
        this.isLive && setTimeout(this.run.bind(this),300-(this.scoreboard.level-1)*30);   
    }


}

export default GameControl;