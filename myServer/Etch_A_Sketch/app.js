let container = document.getElementById('container');
let count = 12;

let count2 = 12;

for (i = 0; i < count2; i++) {
    let column = document.createElement("div")
    column.classList.add("square2")
    container.appendChild(column)
    for (i = 0; i < count; i++) {
        let row = document.createElement("div");
        row.classList.add("square")
        column.appendChild(row)
        row.addEventListener('mouseenter', function () {
            this.style.backgroundColor = "red";
        })
    }
}






// Container.innerHTML = '';


    // let column = document.createElement("div");
    // column.classList.add("square2")
    // container.appendChild(column)
// let test = document.getElementById('test');

// let test = () => {


// }

// test()
