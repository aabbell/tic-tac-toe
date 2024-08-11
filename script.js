let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))
console.log(boxes)
const o_player = 'O'
const x_player = 'X'
let currentplayer = x_player
let spaces = Array(9).fill(null)




const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    console.log(e.target)
    const id = e.target.id

    if (spaces[id] === null){
        spaces[id] = currentplayer
        e.target.innerText = currentplayer

        if (winner() !== false){
            playerText.innerText = `${currentplayer} has won`
            return
        }
        if (currentplayer === x_player){
            currentplayer = o_player
        }
        else{
            currentplayer = x_player
        }
    }
}

const restart = () => {
    restartBtn.addEventListener('click',restartGame)
}

function restartGame(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
    })
    currentplayer = x_player
    playerText.innerText = 'Tic Tac Toe';

}
const winningcombo = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]


function winner(){
    for (let cond of winningcombo){
        let [a,b,c] = cond
        if (spaces[a] &&  spaces[a] == spaces[b] && spaces[a] && spaces[c]){
            console.log(`${currentplayer} wins with combination ${a}, ${b}, ${c}`)
            return true
        }
    }
    return false
}

restart()
startGame()

console.log(playerText)