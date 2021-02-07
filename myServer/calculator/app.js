let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let display = document.getElementById("display");

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
        let val = num.value;
        display.innerText = val;
    }
})






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