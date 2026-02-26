import Ship from "./ship";

class Gameboard {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.grid = this.createBoard();
        this.placement = [];

        this.ship = {
            carrier: new Ship(5),
            battleship: new Ship(4),
            submarine: new Ship(3),
            destroyer: new Ship(2)
        }
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

    placeShip(name, row, col, direction) {
        const ship = this.ship[name];
        const cells = [];
    for (let i = 0; i < ship.length; i++) {
        if (direction  === 'horizontal') {
             cells.push([row, col + i])
        } else {
             cells.push([row + i, col])
        }
    }
        this.placement.push({ ship: name, cells: cells })
        return this.placement
 }

    
    receiveAttack() {

    }
}

module.exports = Gameboard;