import Gameboard from'./gameboard.js';

export default class Player {
    constructor(){
        this.personBoard = new Gameboard();
        this.cpuBoard = new Gameboard();
    }

pcAttack() {
 return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}
}

