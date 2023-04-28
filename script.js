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
let inputNewNumber = false;

const equals = document.getElementById('=');
const plus = document.getElementById('+');

plus.addEventListener('click', () => {
   inputNewNumber = true;
   currentNumber = parseInt(display.textContent);
   
   
   
   runningTotal = operate(runningTotal, '+', currentNumber);
   currentNumber = 0;
   display.textContent = runningTotal;
});

equals.addEventListener('click', () => {
    currentNumber = parseInt(display.textContent);
    runningTotal = operate(runningTotal, '+', currentNumber);
    display.textContent = runningTotal;
});


const display = document.getElementById('digits');

const numberButtons = document.querySelectorAll('.key');

let displayValue = 0;

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(inputNewNumber){
            display.textContent = '0';
        }
        if(display.textContent === '0'){
            display.textContent = '';
        }
        display.textContent += button.textContent;
        //currentNumber = parseInt(display.textContent);
        
    });
});

