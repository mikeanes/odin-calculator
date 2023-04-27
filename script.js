function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function operate(num1, operator, num2){
    if(operator == '+'){
        return add(num1, num2);
    }else if(operator == '-'){
        return subtract(num1, num2);
    }else if(operator == '*'){
        return multiply(num1, num2);
    }else if(operator == '/'){
        return divide(num1, num2);
    }
};

let runningTotal = 0;
let currentNumber = 0;
let isEnteringNum1 = true;

const equals = document.getElementById('=');
const plus = document.getElementById('+');

plus.addEventListener('click', () => {
   num1 = displayValue;
   display.textContent = num1;
   isEnteringNum1 = false;
    displayValue = 0;
   
});

equals.addEventListener('click', () => {
    if(isEnteringNum1){
        return;
    }
    num2 = displayValue;
    display.textContent = operate(num1, '+', num2);
    num1 = num2 = 0;
    isEnteringNum1 = true;
});


const display = document.getElementById('digits');

const numberButtons = document.querySelectorAll('.key');

let displayValue = 0;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(display.textContent === '0' || !isEnteringNum1 && display.textContent === num1.toString()){
            display.textContent = '';
        }
        display.textContent += button.textContent;
        displayValue = parseInt(display.textContent);
        console.log(displayValue);
    });
});

