class Snake {

    element: HTMLElement;
    snakeHead: HTMLElement;
    snakeBody: HTMLCollection;
    // direction:string=''
    constructor() {
        this.element = document.getElementById("snake")!;
        this.snakeHead = document.querySelector('#snake > div') as HTMLElement;
        this.snakeBody = this.element.getElementsByTagName("div")!;
        

    }
    get X() {
        return this.snakeHead.offsetLeft;
    }
    get Y() {
        return this.snakeHead.offsetTop;
    }
    set X(value: number) {
        if (this.X == value) {
            return
        }
        if (this.X < 0 || this.X > 290) {
            throw new Error('You dead! GAME OVER!');

        }
        // if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft===value) {
        //     if (value < this.X) {
        //         value = this.X+10
        //     }
        //     else{
        //         value = this.X-10
        //     }
        // }
        // this.moveBody();
    
        this.snakeHead.style.left = value + 'px';
        this.checkEatBody();

    }
    set Y(value: number) {
        if (this.Y == value) {
            return
        }
        if (this.Y < 0 || this.Y > 290) {
            throw new Error('You dead! GAME OVER!');
        }
        // if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop===value) {
        //     if (value > this.Y) {
        //         value = this.Y-10;
        //     }
        //     else {
        //         value = this.Y+10;
        //     }
        // }
        // this.moveBody();
        this.snakeHead.style.top = value + 'px';
        this.checkEatBody();

    }
    //增加蛇身子
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");


    }

    moveBody() {
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            let X = (this.snakeBody[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;
            (this.snakeBody[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = Y + 'px';
        }
    }


    checkEatBody() {
        for (let i = 1; i < this.snakeBody.length; i++) {
            if ((this.snakeBody[i] as HTMLElement).offsetLeft == this.X && (this.snakeBody[i] as HTMLElement).offsetTop == this.Y) {
                // alert("You eat you! GAME OVER!")
                throw new Error("You eat you! GAME OVER!")
            }

        }
    }
}

export default Snake