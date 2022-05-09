class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    getX() {
        return this.element.offsetLeft;

    }
    getY() {
        return this.element.offsetTop;

    }
    change() {
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}
const food=new Food();
// console.log(food.getX());
// console.log(food.getY());

food.change();

export default Food;