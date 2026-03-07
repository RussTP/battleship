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


     attackBoard(boardElement, gameboard, player) {
            boardElement.addEventListener('click', (e) => {
             console.log('clicked', e.target.dataset.row, e.target.dataset.col)
            const row = Number(e.target.dataset.row)
            const col = Number(e.target.dataset.col);
            gameboard.receiveAttack(row, col);
            setTimeout(() => {
                         if (player.personBoard.allSunk()) {
            document.querySelector('#turn-display').textContent = 'CPU Wins'
        } else {
            document.querySelector('#turn-display').textContent = `Players turn`;
        }
            this.cpuTurn(player);
            }, 1000);

            if (player.cpuBoard.allSunk()) {
            document.querySelector('#turn-display').textContent = 'Player Wins'
            return;
        } else {
            document.querySelector('#turn-display').textContent = `CPU's turn`;
        }

            boardElement.innerHTML = '';
            this.renderBoard(gameboard.grid, gameboard.placement, boardElement);
            this.updateCells(boardElement, gameboard.hit, gameboard.miss);
            });
        }

             updateCells(boardElement, hits, miss) {
        hits.forEach(({ cell: [row, col] }) => {
            const cell = boardElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.classList.add('hit');

        });
        miss.forEach(([row, col]) => {
            const cell = boardElement.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cell.classList.add('miss');
        });
      
     }


    handleClick(player) {
            this.attackBoard(document.querySelector('#cpu-board'), player.cpuBoard, player);

        }

    cpuTurn(player) {
            const [row, col] = player.pcAttack();
            player.personBoard.receiveAttack(row, col);
            const playerBoard = document.querySelector('#player-board');
            playerBoard.innerHTML ='';
            this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard);
            this.updateCells(playerBoard, player.personBoard.hit, player.personBoard.miss);
        }

  
    render(player) {
        const playerBoard = document.querySelector('#player-board');
        const cpuBoard = document.querySelector('#cpu-board');
        document.querySelector('#turn-display').textContent = 'Players turn';
        this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard);
        this.renderBoard(player.cpuBoard.grid, player.cpuBoard.placement, cpuBoard);
        this.handleClick(player);
    
    }
}


