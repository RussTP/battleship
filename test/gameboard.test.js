const Gameboard = require('../src/gameboard');

test('Create gameboard 10x10 grid', () => {
    const board = new Gameboard();
    expect(board.grid.length).toBe(10);
    expect(board.grid[0].length).toBe(10);
})

test('place ships on the board', () => {
    const board = new Gameboard();
    board.placeShip('carrier', 0, 0, 'horizontal');
    expect(board.placement).toEqual([{ ship: 'carrier', cells: [[0,0],[0,1],[0,2],[0,3],[0,4]] }])
})

