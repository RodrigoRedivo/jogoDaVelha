document.addEventListener('DOMContentLoaded', () => {
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    
    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {
        
        setTimeout(() => {
            alert("O Jogo Acabou ==> o Vencedor foi " + playerTime);
        }, 10);
    };
    updateSquares(postion);
}

function updateSquares(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {
    
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}