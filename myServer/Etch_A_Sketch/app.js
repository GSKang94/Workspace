let userInput = document.getElementById('user-input');

var output = document.getElementById("demo");
output.innerHTML = userInput.value;

userInput.oninput = function () {
    container.innerHTML = '';
    output.innerHTML = this.value;
    (userInput.value <= 64) ? makeGrid(userInput.value, userInput.value) : null;
}

let container = document.getElementById('container');

let style = getComputedStyle(document.body);
let gridColor = style.getPropertyValue('--grid-color');



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










// let submitBtn = document.getElementById('submit-btn');


        // 

// submitBtn.addEventListener('click', function () {
//     (userInput.value <= 64) ? makeGrid(userInput.value, userInput.value) : null;
// })














// let square = 49;

// for (i = 0; i < square; i++) {
//     let e = document.createElement("div")
//     e.classList.add("square")
//     container.appendChild(e)
//     e.addEventListener('mouseenter', function () {
//         this.style.backgroundColor = "gray";
//     })
// }



// console.log(document.style.getPropertyValue("--grid-row-column"))





// let container = document.getElementById('container');
// let count = 12;

// let count2 = 12;

// for (i = 0; i < count2; i++) {
//     let column = document.createElement("div")
//     column.classList.add("square2")
//     container.appendChild(column)
//     for (i = 0; i < count; i++) {
//         let row = document.createElement("div");
//         row.classList.add("square")
//         column.appendChild(row)
//         row.addEventListener('mouseenter', function () {
//             this.style.backgroundColor = "red";
//         })
//     }
// }






// Container.innerHTML = '';


    // let column = document.createElement("div");
    // column.classList.add("square2")
    // container.appendChild(column)
// let test = document.getElementById('test');

// let test = () => {


// }

// test()
