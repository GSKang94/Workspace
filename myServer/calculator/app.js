
let display = document.getElementById("display");

let clearAll = document.getElementById("clear-all");
let edit = document.getElementById("edit");
let sign = document.getElementById("sign");
let multiBtn = document.getElementById("multi-btn");
let divideBtn = document.getElementById("divide-btn");
let minusBtn = document.getElementById("minus-btn");
let plusBtn = document.getElementById("plus-btn");
let decimal = document.getElementById("decimal");
let equalBtn = document.getElementById("equal-btn");


let numbers = []
numbers[0] = document.getElementById("zero");
numbers[1] = document.getElementById("one");
numbers[2] = document.getElementById("two");
numbers[3] = document.getElementById("three");
numbers[4] = document.getElementById("four");
numbers[5] = document.getElementById("five");
numbers[6] = document.getElementById("six");
numbers[7] = document.getElementById("seven");
numbers[8] = document.getElementById("eight");
numbers[9] = document.getElementById("nine");


numbers.forEach(function (num) {
    num.onclick = function () {
        display.innerText = display.innerText + num.value;
    }
})

clearAll.onclick = function () {
    display.innerText = "";
}

plusBtn.onclick = function () {
    display.innerText = display.innerText + "+";
}
minusBtn.onclick = function () {
    display.innerText = display.innerText + "-";
}
divideBtn.onclick = function () {
    display.innerText = display.innerText + "/";
}
decimal.onclick = function () {
    display.innerText = display.innerText + ".";
}
multiBtn.onclick = function () {
    display.innerText = display.innerText + "*";
}

equalBtn.onclick = function () {
    display.innerText = eval(display.innerText);
}

edit.onclick = function () {
    display.innerText = display.innerText.substring(0, display.innerText.length - 1);
}


let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;






  // console.log(str);
    // let str = display.innerText;
    // let test = display.innerText.split("+", "-")
    // console.log(test)

// plusBtn.onclick = () => display.innerText = display.innerText + "+";
        // console.log(typeof display.innerText)

// let test = display.innerText.split("")
    // .reduce(function (n, m) {
    //     return Number(n) + Number(m)
    // })
    // let result = eval(display.innerText)
    // display.innerText = `${ display.innerText }`
    // console.log(test)
        // console.log(display.innerText)
        // let val = num.value;
        // inputDisplay = inputDisplay + val;
// let inputDisplay = display.innerText;

// plusBtn.onclick = function () {

// }


// let numbers = []
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let four = document.getElementById("four");
// let five = document.getElementById("five");
// let six = document.getElementById("six");
// let seven = document.getElementById("seven");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let zero = document.getElementById("zero");

 // console.log(num.value)
// numbers.map(function (e) {
    // e.onclick = () => this.value
//     console.log(e)
// })

// one.onclick = () => console.log(numbers)





// one.addEventListener("click", () => console.log("working"))

// console.log(one)