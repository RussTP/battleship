import Player from'./player.js';
import Display from '../modules/display.js';

document.addEventListener('DOMContentLoaded', () => {
    const newPlayer = new Player();
    const newDisplay = new Display();


    newPlayer.personBoard.placeShip('carrier', 0, 0, 'horizontal');
    newPlayer.personBoard.placeShip('battleship', 2, 3, 'horizontal');
    newPlayer.personBoard.placeShip('submarine', 9, 0, 'horizontal');
    newPlayer.personBoard.placeShip('destroyer', 7, 4, 'horizontal');

    newPlayer.cpuBoard.placeShip('carrier', 0, 0, 'horizontal');
    newPlayer.cpuBoard.placeShip('battleship', 2, 3, 'horizontal');
    newPlayer.cpuBoard.placeShip('submarine', 9, 0, 'horizontal');
    newPlayer.cpuBoard.placeShip('destroyer', 7, 4, 'horizontal');

    newPlayer.currentTurn

       newDisplay.render(newPlayer);
});
