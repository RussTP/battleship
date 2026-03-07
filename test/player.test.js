import Player from '../src/player.js';

test('person and computer have a gameboard', () => {
    const createBoard = new Player();
    expect(createBoard.personBoard).toBeDefined();
    expect(createBoard.cpuBoard).toBeDefined();
}) 

test('computer random attack', () => {
    const createBoard = new Player();
    const result = createBoard.pcAttack();
    expect(result[0]).toBeGreaterThanOrEqual(0)
    expect(result[0]).toBeLessThanOrEqual(9)
})