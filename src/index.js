import Player from'./player.js';
import Display from '../docs/display.js';

document.addEventListener('DOMContentLoaded', () => {
    const newPlayer = new Player();
    const newDisplay = new Display();


    newPlayer.cpuBoard.randomShip(10, 'carrier');
    newPlayer.cpuBoard.randomShip(10, 'battleship');
    newPlayer.cpuBoard.randomShip(10, 'submarine');
    newPlayer.cpuBoard.randomShip(10, 'destroyer');

    newPlayer.currentTurn

       newDisplay.render(newPlayer);
});
