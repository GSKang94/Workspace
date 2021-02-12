let display = document.getElementById("display");
let displayText = "";
let lastNum;

let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
numbers.forEach(function (num, index) {
    numbers[index] = document.getElementById(num)
    num = numbers[index]
    num.onclick = function () {
        displayText += num.value;
    }
})

let operator = ["+", "-", "\u00D7", "\u00f7", "."];

let main = {
    plusBtn() {
        document.getElementById("plus-btn").onclick = function () {
            // check if displayText is not empty
            if (displayText) {
                // check if lastNum is one of the operator to avoid subsequent operator entry.
                !(operator.indexOf(lastNum) > -1) ? displayText += "+" : null;
            }
        }
    },
    minusBtn() {
        document.getElementById("minus-btn").onclick = function () {
            if (displayText) {
                !(operator.indexOf(lastNum) > -1) ? displayText += "-" : null;
            }
        }
    },
    divideBtn() {
        document.getElementById("divide-btn").onclick = function () {
            if (displayText) {
                !(operator.indexOf(lastNum) > -1) ? displayText += "\u00f7" : null;
            }
        }
    },
    multiBtn() {
        document.getElementById("multi-btn").onclick = function () {
            if (displayText) {
                !(operator.indexOf(lastNum) > -1) ? displayText += "\u00D7" : null;
            }
        }
    },
    decimal() {
        document.getElementById("decimal").onclick = function () {
            if (displayText) {
                // To avoid using more than one decimal 
                !(operator.indexOf(lastNum) > -1) && !displayText.includes(".") ? displayText += "." : null;
            }
        }
    },
    equalBtn() {
        document.getElementById("equal-btn").onclick = function () {
            displayText = displayText.replace(/\u00f7/g, "/").replace(/\u00D7/g, "*");
            // displayText = displayText.replace(/\u00D7/g, "*")
            displayText = eval(displayText).toString();
            displayText = Math.round(displayText * 1000) / 1000;
        }
    },
    sign() {
        document.getElementById("sign").onclick = function () {
            displayText[0] !== "-" ?
                displayText = "-" + displayText
                : displayText = displayText.replace("-", "");
        }
    },
    edit() {
        document.getElementById("edit").onclick = function () {
            displayText = displayText.substring(0, displayText.length - 1);
        }
    },
    clearAll() {
        document.getElementById("clear-all").onclick = function () {
            displayText = ""
        }
    },
}

let callMainFn = function () {
    Object.values(main).forEach(s => s())
}
callMainFn()


let selectAll = document.querySelectorAll(".btn");
for (i = 0; i < selectAll.length; i++) {
    selectAll[i].addEventListener('click', function () {
        showDisplay()
    });
}

let showDisplay = function () {
    lastNum = displayText[displayText.length - 1]
    display.innerText = displayText;
}










            // console.log(displayText[0])
            // displayText[0] !== "-" ? displayText[0] = "-" : displayText[0] = "";
            // console.log(displayText[0])

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