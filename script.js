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

function round(num){
    return Math.round(num * 1000)/1000;
}

let runningTotal = 0;
let currentNumber = 0;
let operator = null;
let inputNewNumber = false;
let hasEqualClicked = false;
let decimalClicked = false;
let operatorClicked = false;

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
    divi.disabled = true;
    mult.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
});

mult.addEventListener('click', (event) => {
    operatorButtons(event);
    mult.disabled = true;
    divi.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
});

minus.addEventListener('click', (event) => {
    operatorButtons(event);
    minus.disabled = true;
    plus.disabled = false;
    divi.disabled = false;
    mult.disabled = false;
});

plus.addEventListener('click', (event) => {
    operatorButtons(event);    
    plus.disabled = true;
    minus.disabled = false;
    divi.disabled = false;
    mult.disabled = false;
});

decimal.addEventListener('click', () => {
    decimal.disabled = true;
    decimalClicked = true;
});

equals.addEventListener('click', () => {
    if(operatorClicked){
        return;
    }
    if(!hasEqualClicked){
    equal();
    hasEqualClicked = true;
    operator = null;
    operatorClicked = false;
    }
    plus.disabled = false;
    minus.disabled = false;
    divi.disabled = false;
    mult.disabled = false;
    inputNewNumber = true;
    
});

clear.addEventListener('click', () => {
    location.reload();
});

function equal(){
    decimal.disabled = false;
    currentNumber = parseFloat(display.textContent);
    runningTotal = round(operate(runningTotal, operator, currentNumber));
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
        operatorClicked = true;
        runningTotal = parseFloat(display.textContent);
    }else if(operatorClicked){
        document.getElementById(operator).disabled = true;
        operator = event.target.id;
        document.getElementById(operator).disabled = false;
    }
    else{
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
        if(decimalClicked){
            if(operatorClicked){
                display.textContent = '0.';
                operatorClicked = false;
                return;
            }
            decimalClicked = false;
            display.textContent += button.textContent;
            return;
        }
        if(inputNewNumber){
            display.textContent = '0';
            inputNewNumber = false;
        }
        if(display.textContent === '0'){
            display.textContent = '';
        }
        if(operatorClicked){ 
            plus.disabled = false;
            minus.disabled = false;
            mult.disabled = false;
            divi.disabled = false;
            operatorClicked = false;
        }
        display.textContent += button.textContent;
    });
});


