let userInput = document.getElementById('user-input');
let output = document.getElementById("output");
let container = document.getElementById('container');
let clearGrid = document.getElementById("clear");

output.innerHTML = userInput.value;

let sliderValue = 10;

userInput.oninput = function () {
    container.innerHTML = '';
    sliderValue = this.value;
    output.innerHTML = sliderValue;
    makeGrid(sliderValue, sliderValue);
}

function makeGrid(rows, columns) {
    container.style.setProperty("--grid-row-column", rows);
    container.style.setProperty("--grid-row-column", columns);

    let result = rows * columns;

    for (i = 0; i < result; i++) {
        let e = document.createElement("div")
        e.classList.add("square")
        container.appendChild(e)
        e.addEventListener('mouseenter', function () {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
        })
    }
}

makeGrid(10, 10);

clearGrid.addEventListener('click', function () {
    container.innerHTML = '';
    makeGrid(sliderValue, sliderValue);
})
