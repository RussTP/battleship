export default class Display {
    
    render(player) {
        const displayBoard = document.querySelector('#player-board');
        const grid = player.gameboard.grid;
        
        grid.forEach(row => {
            row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            displayBoard.appendChild(cellDiv);
            });
         });
     }
}


