let container = document.querySelector('.container')
let congratsDiv = document.getElementById('congrats-div')
let congratsMsg = document.getElementById('congrats-msg')
let cells = Array.from(document.querySelectorAll('.game-cell'))
let resetBtn = document.getElementById('reset-btn')
let scoreboard = document.getElementById('scoreboard')
let winCountSpanX = document.querySelector('#player-x-scores > .wins-para > .wins-count')
let loseCountSpanX = document.querySelector('#player-x-scores > .losses-para > .losses-count')
let winCountSpanO = document.querySelector('#player-o-scores > .wins-para > .wins-count')
let loseCountSpanO = document.querySelector('#player-o-scores > .losses-para > .losses-count')

resetBtn.addEventListener('click', resetGame)
let turn = 'O'

cells.forEach(cell => {
    cell.addEventListener('click', (e) => {
        if(e.target.innerText === ''){
            turn === 'O' ? e.target.innerText = 'O' : e.target.innerText = 'X'
            let filtered = cells.filter(cell => cell.innerText === '')
            console.log(filtered)
            if(turn === 'X' && filtered.length > 0){
                if(cells[0].innerText === 'X' && cells[1].innerText === 'X' && cells[2].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[3].innerText === 'X' && cells[4].innerText === 'X' && cells[5].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[6].innerText === 'X' && cells[7].innerText === 'X' && cells[8].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[0].innerText === 'X' && cells[3].innerText === 'X' && cells[6].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[1].innerText === 'X' && cells[4].innerText === 'X' && cells[7].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[2].innerText === 'X' && cells[5].innerText === 'X' && cells[8].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[0].innerText === 'X' && cells[4].innerText === 'X' && cells[8].innerText === 'X'){
                    announceWinner('X')
                }else if(cells[2].innerText === 'X' && cells[4].innerText === 'X' && cells[6].innerText === 'X'){
                    announceWinner('X')
                }else {
                    turn = 'O'
                }
            }
            else if(turn === 'O' && filtered.length > 0){
                if(cells[0].innerText === 'O' && cells[1].innerText === 'O' && cells[2].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[3].innerText === 'O' && cells[4].innerText === 'O' && cells[5].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[6].innerText === 'O' && cells[7].innerText === 'O' && cells[8].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[0].innerText === 'O' && cells[3].innerText === 'O' && cells[6].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[1].innerText === 'O' && cells[4].innerText === 'O' && cells[7].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[2].innerText === 'O' && cells[5].innerText === 'O' && cells[8].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[0].innerText === 'O' && cells[4].innerText === 'O' && cells[8].innerText === 'O'){
                    announceWinner('O')
                }else if(cells[2].innerText === 'O' && cells[4].innerText === 'O' && cells[6].innerText === 'O'){
                    announceWinner('O')
                }else {
                    turn = 'X'
                }
            }
            else {
                announceWinner()
            }
        }
    })
})

function announceWinner(winner){
    if(winner === 'X'){
        winCountSpanX.innerText = Number(winCountSpanX.innerText) + 1
        loseCountSpanO.innerText = Number(loseCountSpanO.innerText) + 1
    }else if(winner === 'O'){
        winCountSpanO.innerText = Number(winCountSpanO.innerText) + 1
        loseCountSpanX.innerText = Number(loseCountSpanX.innerText) + 1
    }
    congratsDiv.setAttribute('id', 'congrats-div-active')
    container.style.display = 'none'
    scoreboard.style.display = 'none'
    winner ? congratsMsg.innerText = `Congratulations, player ${winner} wins !` : congratsMsg.innerText = 'The game is a draw!'
}

function resetGame(){
    congratsDiv.setAttribute('id', 'congrats-div')
    container.style.display = 'block'
    scoreboard.style.display = 'flex'
    cells.forEach(cell => cell.textContent = '')
}

