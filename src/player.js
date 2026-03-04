import Gameboard from'./gameboard.js';

export default class Player {
    constructor(){
        this.gameboard = new Gameboard();
        
    }
person() {
    new Gameboard();
}

computer() {
    new Gameboard();
    }

pcAttack() {
 return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}
}

