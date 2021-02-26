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
            displayText = eval(displayText)
            displayText = (Math.round(displayText * 1000) / 1000).toString();
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


