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
});

mult.addEventListener('click', (event) => {
    operatorButtons(event);
    mult.disabled = true;
});

minus.addEventListener('click', (event) => {
    operatorButtons(event);
    minus.disabled = true;
});

plus.addEventListener('click', (event) => {
    operatorButtons(event);    
    plus.disabled = true;
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
    enableAll();
    inputNewNumber = true;
});

clear.addEventListener('click', () => {
    runningTotal = 0;
    currentNumber = 0;
    operator = null;
    inputNewNumber = false;
    hasEqualClicked = false;
    decimalClicked = false;
    operatorClicked = false;
    enableAll();
    updateDisplay();
});

function equal(){
    decimal.disabled = false;
    currentNumber = parseFloat(display.textContent);
    runningTotal = round(operate(runningTotal, operator, currentNumber));
    updateDisplay();
};

function enableAll(){
    divi.disabled = false;
    mult.disabled = false;
    minus.disabled = false;
    plus.disabled = false;
    operatorClicked = true;
}

function updateDisplay(){
    if(operator == null){
        display.textContent = currentNumber;
    }else if(operator === '/' && (display.textContent === '0' || display.textContent === '0.')){
        display.textContent = "Bro that's illegal";
        runningTotal = 0;
        currentNumber = 0;
        decimalClicked = false;
        return;
    }else if(isNaN(runningTotal)){
        display.textContent = 'ERROR';
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
    enableAll();
};

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        //enableAll();
        if(decimalClicked){
            if(operatorClicked){
                display.textContent = '0.';
                operatorClicked = false;
                return;
            }
            decimalClicked = false;
            display.textContent += button.textContent;
            inputNewNumber = false;
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
            enableAll();
            operatorClicked = false;
        }
        if(display.textContent.toString().length > 27){
            return;
        }
        display.textContent += button.textContent;
    });
});


