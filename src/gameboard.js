class Gameboard {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.grid = this.createBoard();
    }

    createBoard() {
        const grid = [];
    for (let i = 0; i < this.rows; i++) {
        const row = [];
    for (let j = 0; j < this.cols; j++) {
       row.push("");
        }
       grid.push(row);
     }
     return grid; 
    }
    
    receiveAttack() {

    }
}

module.exports = Gameboard;