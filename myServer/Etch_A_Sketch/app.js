let container = document.getElementById('container');

function grid(rows, columns) {
    container.style.setProperty("--grid-row-column", rows);
    container.style.setProperty("--grid-row-column", columns);

    let result = rows * columns;

    for (i = 0; i < result; i++) {
        let e = document.createElement("div")
        e.classList.add("square")
        container.appendChild(e)
        e.addEventListener('mouseenter', function () {
            this.style.backgroundColor = "gray";
        })
    }
}

grid(10, 10)













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
