const gameStats = {
    player: 'X',
    playerPoints: [0,0],
    grid: [],

    changePlayer: function(){
        this.player = this.player==='X'?'O':'X'
        simboloAtual.innerHTML = gameStats.player
    }
}

const simboloAtual = document.createElement('div')
simboloAtual.innerHTML = gameStats.player
simboloAtual.classList.add('symbol')

const squares = document.querySelectorAll('.square')
let divSymbol
console.log(squares)
squares.forEach(e => {
    e.onmouseenter = () => {
        switch(simboloAtual.innerHTML){
            case 'X': simboloAtual.classList.add('red');break;
            case 'O': simboloAtual.classList.add('blue');break;
        }
        e.appendChild(simboloAtual)
        divSymbol = e.firstChild;
    }
})

const grid = document.querySelector('.grid')
console.log(grid)
grid.onmouseleave = () => {
    // divSymbol.remove()
}

squares.forEach((e,i) => {
    e.onclick = () => {
        gameStats.grid[i] = gameStats.player
        gameStats.changePlayer()
    }
})

function NodeSymbol(){
    
}