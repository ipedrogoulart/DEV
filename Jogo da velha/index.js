const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector("[data-board")

let isCircleTurn = false

const startGame = () =>{}
//////////////////parou aqui///////////////////

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn

    board.classList.remove("circle")
    board.classList.remove("x")

    if (isCircleTurn) {
        board.classList.add("circle")
    } else {
        board.classList.add("x")
    }
}

const handleClick = (e) => {
    //colocar x ou o
    const cell = e.target
    const classToAdd = isCircleTurn ? "circle" : "x"
    
    placeMark(cell, classToAdd)
    //verificar por vitória
    //verificar por empate
    //mudar o simbolo
    swapTurns()
}


for (const cell of cellElements){
    cell.addEventListener("click", handleClick, { once: true })
}

