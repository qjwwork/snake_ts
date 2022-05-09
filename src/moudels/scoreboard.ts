class ScoreBoard {

    score = 0;
    level = 1;


    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore() {
        this.score = this.score + 1;
        this.scoreElement.innerHTML = this.score + '';
        if (this.score % this.upScore === 0) {
            this.addLevel();
        }

    }
    addLevel() {
        if (this.level < this.maxLevel) {
            this.level = this.level + 1;
            this.levelElement.innerHTML = this.level + '';
        }

    }

}
// const addscore = new ScoreBoard();
// for(let i=0;i<10;i++){
//     addscore.addScore();
// }

export default ScoreBoard;