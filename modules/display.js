export default class Display {

    
    renderBoard(grid, placement, boardElement, hideShips = false) {
         grid.forEach((row, i) => {
            row.forEach((cell, j) => {
            const isShip = placement.find(entry =>
                entry.cells.some(cell => cell[0] === i && cell[1] === j));
            const cellDiv = document.createElement('div');
            cellDiv.dataset.row = i;
            cellDiv.dataset.col = j;
            cellDiv.classList.add('cell');
            if (isShip && !hideShips) {
             cellDiv.classList.add('ship')   
            }
            boardElement.appendChild(cellDiv);
           
            });
         });
     }

     randomShipBtn(player) {
      const random = document.querySelector('#random-ship-btn');
      random.addEventListener('click', () => {
        player.personBoard.reset();
        player.personBoard.randomShip(10, 'carrier');
        player.personBoard.randomShip(10, 'battleship');
        player.personBoard.randomShip(10, 'submarine');
        player.personBoard.randomShip(10, 'destroyer');

        const playerBoard = document.querySelector('#player-board')
        playerBoard.innerHTML = '';
        this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard)
      })
    }

     attackBoard(boardElement, gameboard, player) {
            this.controller = new AbortController(); 
            let gameOver = false;
            let isProcessing = false;

    

            boardElement.addEventListener('click', (e) => {
            if (!e.target.dataset.row) return;
            if (isProcessing) return;
            isProcessing = true;
             console.log('clicked', e.target.dataset.row, e.target.dataset.col)
            const row = Number(e.target.dataset.row)
            const col = Number(e.target.dataset.col);

           
            const result = gameboard.receiveAttack(row, col);
            if (typeof result === 'string') {
            document.querySelector('#notification').textContent = `You sunk my ${result}!`;
            setTimeout(() => {
                document.querySelector('#notification').textContent = '';
            }, 2500)
            }

            
            boardElement.innerHTML = '';
             document.querySelector('#random-ship-btn').disabled = true;
            this.renderBoard(gameboard.grid, gameboard.placement, boardElement, true);
            this.updateCells(boardElement, gameboard.hit, gameboard.miss);
            

            if (player.cpuBoard.allSunk()) {
            document.querySelector('#turn-display').textContent = 'You Win!'
            gameOver = true;
            this.controller.abort(); 
            return;    
        } 
            document.querySelector('#turn-display').textContent = `CPU's turn`;
                    
            setTimeout(() => {
             if(gameOver) return;
             if (player.personBoard.allSunk()) {
                document.querySelector('#turn-display').textContent = 'You Lose!'
                this.controller.abort(); 
        } else {
                document.querySelector('#turn-display').textContent = `Players turn`;
                 this.cpuTurn(player);
        }
                isProcessing = false;
           }, 700);

            }, {signal: this.controller.signal });
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

        resetGame(player) {
            const reset = document.querySelector('#reset-btn'); 
                reset.addEventListener('click' , () => {
                    this.controller.abort();
                    player.personBoard.reset();
                    player.cpuBoard.reset();                
                    player.cpuBoard.randomShip(10, 'carrier');
                    player.cpuBoard.randomShip(10, 'battleship');
                    player.cpuBoard.randomShip(10, 'submarine');
                    player.cpuBoard.randomShip(10, 'destroyer');

                    const playerBoard = document.querySelector('#player-board');
                    const cpuBoard = document.querySelector('#cpu-board');
                    document.querySelector('#notification').textContent = '';
                    document.querySelector('#random-ship-btn').disabled = false;
                    playerBoard.innerHTML = '';
                    cpuBoard.innerHTML = '';
    

                    this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard);
                    this.renderBoard(player.cpuBoard.grid, player.cpuBoard.placement, cpuBoard, true);
                    document.querySelector('#turn-display').textContent = 'Players turn';
                    this.handleClick(player);
                });
            }
        

  
    render(player) {
        const playerBoard = document.querySelector('#player-board');
        const cpuBoard = document.querySelector('#cpu-board');
        document.querySelector('#turn-display').textContent = 'Players turn';
        this.renderBoard(player.personBoard.grid, player.personBoard.placement, playerBoard);
        this.renderBoard(player.cpuBoard.grid, player.cpuBoard.placement, cpuBoard, true);
        this.randomShipBtn(player);
        this.handleClick(player);
        this.resetGame(player);
    
    }
}


