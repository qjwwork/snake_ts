class Snake {

    element: HTMLElement;
    snakeHead: HTMLElement;
    snakeBody: HTMLCollection;
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
        this.snakeHead.style.left = value + 'px';

    }
    set Y(value: number) {
        this.snakeHead.style.top = value + 'px';

    }
    //增加蛇身子
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
}

export default Snake