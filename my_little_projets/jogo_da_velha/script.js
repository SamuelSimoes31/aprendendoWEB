const gameStats = {
    player: 'X',
    playerPoints: [0,0],
    grid: [],
    
    changePlayer: function(){
        this.player = this.player==='X'?'O':'X'
    }
}

function NodeSymbol(){
    this.element = document.createElement('div')
    this.element.classList.add('symbol')
    this.element.setAttribute('cor','')

    this.setPlayerSymbol = s => {
        this.element.innerHTML = s
        this.element.setAttribute('cor',s=='X'?'red':'blue')
    }

    this.remove = () => this.element.remove()
}

function Squares(){

}

//GAME
const divSymbol = new NodeSymbol()

divSymbol.setPlayerSymbol(gameStats.player) //inicializar

const squares = document.querySelectorAll('[square]')
// console.log(squares)
squares.forEach((e,i) => {
    e.onmouseenter = () => {
        if(gameStats.grid[i]) divSymbol.remove()
        else e.appendChild(divSymbol.element)
    }
})

const grid = document.querySelector('.grid')
// console.log(grid)
grid.onmouseleave = () => {
    divSymbol.remove()
}

squares.forEach((e,i) => {
    e.onclick = () => {
        if(!gameStats.grid[i]){
            gameStats.grid[i] = gameStats.player
            gameStats.changePlayer()
            divSymbol.remove()
            let clone = divSymbol.element.cloneNode(true)
            e.appendChild(clone)
            divSymbol.setPlayerSymbol(gameStats.player)
            e.setAttribute('square','filled')
        }
    }
})
