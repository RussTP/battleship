export default class Display {
    
    renderBoard(grid, placement, boardElement) {
         grid.forEach((row, i) => {
            row.forEach((cell, j) => {
            const isShip = placement.find(entry =>
                entry.cells.some(cell => cell[0] === i && cell[1] === j));
            const cellDiv = document.createElement('div');
            cellDiv.dataset.row = i;
            cellDiv.dataset.col = j;
            cellDiv.classList.add('cell');
            if (isShip) {
             cellDiv.classList.add('ship')   
            }
            boardElement.appendChild(cellDiv);
           
            });
         });
     }

     handleClick(player) {
        const cpuBoard = document.querySelector('#cpu-board');

            cpuBoard.addEventListener('click', (e) => {
             console.log('clicked', e.target.dataset.row, e.target.dataset.col)
            const row = e.target.dataset.row;
            const col = e.target.dataset.col;
            const result = player.cpuBoard.receiveAttack(Number(row), Number(col));
            console.log(result);
            cpuBoard.innerHTML ='';
            this.renderBoard(player.cpuBoard.grid, player.cpuBoard.placement, cpuBoard)
        })
     }
  
    render(player) {
        const playerBoard = document.querySelector('#player-board');
        const cpuBoard = document.querySelector('#cpu-board');

        this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard);
        this.renderBoard(player.cpuBoard.grid, player.cpuBoard.placement, cpuBoard);
        this.handleClick(player);
    }


}


