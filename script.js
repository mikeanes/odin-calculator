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
let operator = null;
let inputNewNumber = false;
let hasEqualClicked = false;
let hasDecimal = false;

const display = document.getElementById('digits');
const numberButtons = document.querySelectorAll('.key');
const equals = document.getElementById('=');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('*');
const divi = document.getElementById('/');
const decimal = document.getElementById('.');
const clear = document.getElementById('clear');

divi.addEventListener('click', (event) => {
    operatorButtons(event);
});

mult.addEventListener('click', (event) => {
    operatorButtons(event);
});

minus.addEventListener('click', (event) => {
    operatorButtons(event);
});

plus.addEventListener('click', (event) => {
    operatorButtons(event);    
});

decimal.addEventListener('click', () => {
    decimal.disabled = true;
});

equals.addEventListener('click', () => {
    if(!hasEqualClicked){
    equal();
    hasEqualClicked = true;
    operator = null;
    }
});

clear.addEventListener('click', () => {
    location.reload();
});

function equal(){
    decimal.disabled = false;
    currentNumber = parseFloat(display.textContent);
    runningTotal = operate(runningTotal, operator, currentNumber);
    updateDisplay();
};

function updateDisplay(){
    if(operator == null){
        display.textContent = currentNumber;
    }else{
        display.textContent = runningTotal;
    }
    
};

function operatorButtons(event){
    decimal.disabled = false;
    if(operator == null){
        operator = event.target.id;
        runningTotal = parseFloat(display.textContent);
    }else{
        equal();
        operator = event.target.id;
    }
    inputNewNumber = true;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
};

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(inputNewNumber){
            display.textContent = '0';
            inputNewNumber = false;
        }
        if(display.textContent === '0'){
            display.textContent = '';
        }
        display.textContent += button.textContent;
    });
});


