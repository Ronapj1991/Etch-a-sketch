const screen = document.querySelector(".container");
const canvasBtn = document.querySelector(".btn");

let userInput = 64;
let gridSize = Math.pow(userInput, 2);

screen.style.gridTemplateColumns = `repeat(64, 1fr)`;

function createGrid(size=4096) {
    for (let createTimes = 0; createTimes < size; createTimes += 1) {
        let boxCreate = document.createElement('div');
        boxCreate.classList.add("grid-box");
        screen.appendChild(boxCreate)
    }
}

function hoverEffect(color="black") {
    let boxes = document.querySelectorAll(".grid-box")

    Array.from(boxes).forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = color;
        })
    })
}

canvasBtn.addEventListener('click', (e) => {
    while(true) {
        userInput = prompt("How many squares do you need per side?(limit is 100)");
        userInput = parseInt(userInput);
        if (typeof userInput === 'number' && userInput <= 100) break;
    }

    gridSize = Math.pow(userInput, 2);

    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }

    screen.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;

    createGrid(gridSize);
    hoverEffect()
    
    e.stopPropagation();
})

createGrid();
hoverEffect();