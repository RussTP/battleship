export default class Display {
    
    renderBoard(grid, boardElement) {
         grid.forEach(row => {
            row.forEach(cell => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            boardElement.appendChild(cellDiv);
            });
         });
     }

    render(player) {
        const playerBoard = document.querySelector('#player-board');
        const cpuBoard = document.querySelector('#cpu-board');

        this.renderBoard(player.personBoard.grid, playerBoard);
        this.renderBoard(player.cpuBoard.grid, cpuBoard);
    }
}


