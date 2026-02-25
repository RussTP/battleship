const Gameboard = require('../src/gameboard');

test('Create gameboard 10x10 grid', () => {
    const board = new Gameboard();
    expect(board.grid.length).toBe(10);
    expect(board.grid[0].length).toBe(10);
})

test('Receive attack on specified grid cooridnates', () => {
    
})