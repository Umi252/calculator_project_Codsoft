let currentNumber = '';
let operator = '';
let result = '';
const screen = document.getElementById('screen');

function clearScreen() {
    currentNumber = '';
    operator = '';
    result = '';
    screen.textContent = '0';
}

function appendNumber(num) {
    currentNumber += num;
    screen.textContent = currentNumber;
}

function setOperator(op) {
    operator = op;
    result = currentNumber;
    currentNumber = '';
}

function calculate() {
    let num1 = parseFloat(result);
    let num2 = parseFloat(currentNumber);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    screen.textContent = result;
    currentNumber = '';
    operator = '';
}
