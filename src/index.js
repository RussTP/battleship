import Player from'./player.js';
import Display from '../modules/display.js';

document.addEventListener('DOMContentLoaded', () => {
    const newPlayer = new Player();
    const newDisplay = new Display();
    newDisplay.render(newPlayer);
});
