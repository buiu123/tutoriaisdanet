document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})
function handleClick(evento){
    let square = evento.target
    let position = square.id
    
    if(handleMove(position)) {
        updateSquares()
        setTimeout(() => {
            alert("o jogo acabou")
        }, 10);
        
    }
    updateSquares()
}
function updateSquares() {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbols != ''){
            square.innerHTML = `<div class='${symbol}'> </div>`
        }
    })
}

function novoJogo() {
    board = ["", "", "", "", "", "", "", "", "",];
    playerTime = 0
    
}