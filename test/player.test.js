const Player = require('../src/player');

test('person and computer have a gameboard', () => {
const createBoard = new Player();
expect(createBoard.gameboard).toBeDefined();
}) 