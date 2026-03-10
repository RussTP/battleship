import Ship from './ship.js';

export default class Gameboard {
    constructor() {
        this.rows = 10;
        this.cols = 10;
        this.grid = this.createBoard();
        this.placement = [];
        this.hit = [];
        this.miss = [];

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
        const occupied = cells.some(newCell =>
            this.placement.some(entry => 
                entry.cells.some(existingCell => 
                    existingCell[0] === newCell[0] && existingCell[1] === newCell[1]
                )
            )
        );

        if (occupied) return false;
        this.placement.push({ship: name, cells: cells });
        return this.placement;
 }

 reset() {
        this.grid = this.createBoard();
        this.placement = [];
        this.hit = [];
        this.miss = [];

        this.ship = {
            carrier: new Ship(5),
            battleship: new Ship(4),
            submarine: new Ship(3),
            destroyer: new Ship(2)
        };
 }

 randomShip(boardSize, name) {
    while (true) {
        const direction = ['horizontal', 'vertical'];
        const ship = this.ship[name];
        const row = Math.floor(Math.random() * (boardSize - ship.length + 1));
        const col = Math.floor(Math.random() *(boardSize - ship.length + 1));
        const randomDirection = Math.floor(Math.random() * direction.length);
        const selectedDirection = direction[randomDirection];
        const result = this.placeShip(name, row, col, selectedDirection)
        if (result) break;
    }
 }

    receiveAttack(row, col) {
     const entry = this.placement.find(entry => entry.cells.some(cell => cell[0] === row && cell[1] === col))
     if (entry === undefined) {
         this.miss.push([row, col])
         return
     }
     this.hit.push({ ship: entry.ship, cell: [row, col] })
     this.ship[entry.ship].hit();
     return this.placement
    }
    
    allSunk() {
        const ships = Object.values(this.ship);
        return ships.every((ship) => ship.isSunk() === true); 

    }
  
}

