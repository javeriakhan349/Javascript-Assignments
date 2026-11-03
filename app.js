
var displayValue = "0";
var firstNumber = null;
var operator = null;
var waitingForSecondNumber = false;
function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function pressNumber(number) {
    if (displayValue === "Error") {
        displayValue = "0";
    }
    if (waitingForSecondNumber) {
        displayValue = number;
        waitingForSecondNumber = false;
    }
    else {
        if (displayValue === "0") {

            displayValue = number;
        }
        else {
            if (displayValue.length < 15) {

                displayValue = displayValue + number;
            }
        }
    }
    updateDisplay();
}

function decimal() {
    if (waitingForSecondNumber) {
        displayValue = "0.";
        waitingForSecondNumber = false;
    }
    else {
        if (displayValue.indexOf(".") === -1) {
            displayValue = displayValue + ".";
        }
    }
    updateDisplay();
}

function setOperator(nextOperator) {
    if (displayValue === "Error") {
        return;
    }
    if (operator !== null && !waitingForSecondNumber) {

        calculate();
    }

    firstNumber = Number(displayValue);
    operator = nextOperator;
    waitingForSecondNumber = true;
    document.getElementById("previous").innerHTML =
        firstNumber + " " + operator;
}

function calculate() {
    if (operator === null || waitingForSecondNumber) {
        return;
    }
    var secondNumber = Number(displayValue);
    var result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                alert("Cannot divide by zero!");
                displayValue = "Error";
                firstNumber = null;
                operator = null;
                waitingForSecondNumber = true;
                updateDisplay();
                document.getElementById("previous").innerHTML = "";
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }
    displayValue = Number(result.toFixed(8)).toString();
    document.getElementById("previous").innerHTML =
        firstNumber + " " + operator + " " + secondNumber + " =";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = true;
    updateDisplay();
}

function clearCalculator() {
    displayValue = "0";
    firstNumber = null;
    operator = null;
    waitingForSecondNumber = false;
    document.getElementById("previous").innerHTML = "";
    updateDisplay();
}

function deleteNumber() {
    if (displayValue === "Error") {
        clearCalculator();
        return;
    }
    if (waitingForSecondNumber) {
        return;
    }
    if (displayValue.length > 1) {
        displayValue = displayValue.substring(
            0,
            displayValue.length - 1
        );
    }
    else {
        displayValue = "0";

    }
    if (displayValue === "-") {

        displayValue = "0";

    }
    updateDisplay();
}

function percentage() {
    if (displayValue === "Error") {
        return;
    }
    displayValue = (Number(displayValue) / 100).toString();
    updateDisplay();
}

function changeSign() {
    if (displayValue === "Error") {
        return;
    }
    if (Number(displayValue) !== 0) {

        displayValue = (Number(displayValue) * -1).toString();

    }
    updateDisplay();
}
