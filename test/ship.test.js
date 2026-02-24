const Ship = require('../src/ship');

test('The legnth count of a ship', () => {
    const createShip = new Ship(3)
    expect(createShip.length).toEqual(3);
})

test('Increase hit count if the ship is hit', () => {
    const createShip = new Ship(3);
    createShip.hit();
    expect(createShip.hitCount).toBe(1);
})

test('Check if battleship has sunk', () => {
    const createShip = new Ship(3)
    createShip.hit();
    createShip.hit();
    createShip.hit();
    expect(createShip.isSunk()).toBe(true);

})

