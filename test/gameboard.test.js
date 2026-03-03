const Gameboard = require('../src/gameboard');

test('create gameboard 10x10 grid', () => {
    const board = new Gameboard();
    expect(board.grid.length).toBe(10);
    expect(board.grid[0].length).toBe(10);
})

test('place ships on the board', () => {
    const board = new Gameboard();
    board.placeShip('carrier', 0, 0, 'horizontal');
    expect(board.placement).toEqual([{ ship: 'carrier', cells: [[0,0],[0,1],[0,2],[0,3],[0,4]] }])
})

test('place ships on the board', () => {
    const board = new Gameboard();
    board.placeShip('battleship', 2, 3, 'vertical');
    expect(board.placement).toEqual([{ ship: 'battleship', cells: [[2,3],[3,3],[4,3],[5,3]] }])
})

test('receieve attack, on correct ship', () => {
    const board = new Gameboard();
    board.placeShip('carrier', 0, 0, 'horizontal');
    board.receiveAttack(0, 0)
    expect(board.hit).toEqual([{ ship: 'carrier', cell: [0,0]}])
})

test('receive miss', () => {
    const board = new Gameboard();
    board.receiveAttack(0, 5)
    expect(board.miss).toEqual([[0, 5]])
})

test('check if all ships have sunk', () => {
    const board = new Gameboard();
    board.placeShip('carrier', 0, 0, 'horizontal');
    board.receiveAttack(0,0)
    board.receiveAttack(0,1)
    board.receiveAttack(0,2)  
    board.receiveAttack(0,3)
    board.receiveAttack(0,4)

    board.placeShip('battleship', 2, 3, 'vertical');
    board.receiveAttack(2,3)
    board.receiveAttack(3,3)
    board.receiveAttack(4,3)  
    board.receiveAttack(5,3)

    board.placeShip('submarine', 9,0, 'horizontal');
    board.receiveAttack(9,0)
    board.receiveAttack(9,1)  
    board.receiveAttack(9,2)
    
    board.placeShip('destroyer', 7, 4, 'horizontal');
    board.receiveAttack(7,4)  
    board.receiveAttack(7,5)
    expect(board.allSunk()).toBe(true)
})