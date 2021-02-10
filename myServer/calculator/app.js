let display = document.getElementById("display");
let displayText = "";

let showDisplay = function () {
    return display.innerText = displayText;
}


let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

numbers.forEach(function (num, index) {
    numbers[index] = document.getElementById(num)
    num = numbers[index]
    num.onclick = function () {
        displayText += num.value;
        showDisplay()
    }
})


let main = {
    plusBtn() {
        document.getElementById("plus-btn").onclick = function () {
            displayText += "+";
            showDisplay()
        }
    },
    minusBtn() {
        document.getElementById("minus-btn").onclick = function () {
            displayText += "-";
            showDisplay()
        }
    },
    divideBtn() {
        document.getElementById("divide-btn").onclick = function () {
            displayText += "/";
            showDisplay()
        }
    },
    multiBtn() {
        document.getElementById("multi-btn").onclick = function () {
            displayText += "*";
            showDisplay()
        }
    },
    decimal() {
        document.getElementById("decimal").onclick = function () {
            displayText = displayText + ".";
            showDisplay()
        }
    },
    equalBtn() {
        document.getElementById("equal-btn").onclick = function () {
            displayText = eval(displayText);
            // console.log(displayText)
            showDisplay()
        }
    },
    sign() {
        document.getElementById("sign").onclick = function () {
            console.log("sign-btn")
        }
    },
    edit() {
        document.getElementById("edit").onclick = function () {
            display.innerText = display.innerText.substring(0, display.innerText.length - 1);
        }
    },
    clearAll() {
        document.getElementById("clear-all").onclick = function () {
            displayText = ""
            showDisplay()
        }
    },


}

let callMainFn = function () {
    Object.values(main).forEach(s => s())
}

callMainFn()




// numbers[0] = document.getElementById("zero");
// numbers[1] = document.getElementById("one");
// numbers[2] = document.getElementById("two");
// numbers[3] = document.getElementById("three");
// numbers[4] = document.getElementById("four");
// numbers[5] = document.getElementById("five");
// numbers[6] = document.getElementById("six");
// numbers[7] = document.getElementById("seven");
// numbers[8] = document.getElementById("eight");
// numbers[9] = document.getElementById("nine");



// let clearAll = document.getElementById("clear-all");
// let edit = document.getElementById("edit");
// let sign = document.getElementById("sign");
// let multiBtn = document.getElementById("multi-btn");
// let divideBtn = document.getElementById("divide-btn");
// let minusBtn = document.getElementById("minus-btn");
// let plusBtn = document.getElementById("plus-btn");
// let decimal = document.getElementById("decimal");
// let equalBtn = document.getElementById("equal-btn");


// test.plusBtn()





// let main = function () {

// let lastDigit = "";
// displayText[displayText.length - 1] = lastDigit;







// showDisplay()
// plusBtn.onclick = function () {
//     displayText = displayText + "+";
//     console.log(this)
//     showDisplay()
// }
// minusBtn.onclick = function () {
//     displayText = displayText + "-";
//     showDisplay()
// }
// divideBtn.onclick = function () {
//     displayText = displayText + "/";
//     showDisplay()
// }
// decimal.onclick = function () {
//     displayText = displayText + ".";
//     showDisplay()
// }
// multiBtn.onclick = function () {
//     displayText = displayText + "x";
//     showDisplay()
// }

// equalBtn.onclick = function () {
//     displayText = eval(displayText);
//     showDisplay()
// }

// edit.onclick = function () {
//     display.innerText = display.innerText.substring(0, display.innerText.length - 1);
// }

// clearAll.onclick = function () {
//     displayText = ""
//     showDisplay()
// }
// }

// main();






// let add = (a, b) => a + b;
// let subtract = (a, b) => a - b;
// let multiply = (a, b) => a * b;
// let divide = (a, b) => a / b;


// function(){
//     display.innerText 
// }



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