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
const backspace = document.getElementById('backspace');

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
    decimal.disabled = false;
    enableAll();
    updateDisplay();
});

backspace.addEventListener('click', () => {
    if(display.textContent === '0' || hasEqualClicked || operatorClicked){
        return;
    }else{
    let displayText = display.textContent;
    displayText = displayText.slice(0, -1);
    display.textContent = displayText;
    if(display.textContent === ''){
        display.textContent = 0;
    }
    if (displayText.slice(-1) !== '.') {
        decimal.disabled = false; // enable the decimal button
        decimalClicked = false; // reset the decimalClicked flag
    }
    }
});

function equal(){
    decimal.disabled = false;
    currentNumber = parseFloat(display.textContent);
    runningTotal = round(operate(runningTotal, operator, currentNumber));
    
    if(runningTotal.toString().length > 13){
        runningTotal = runningTotal.toExponential(8);
    }
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
        if(decimalClicked){
            if(operatorClicked || (display.textContent === '0' && operatorClicked)){
                display.textContent = '0';
                operatorClicked = false;
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
        if(display.textContent.toString().length > 13){
            return;
        }
        display.textContent += button.textContent;
    });
});
window.onkeydown = function(e){
    let pressedKey = e.key;
    let choice;
    switch(pressedKey){
        case '0':
            choice = document.getElementById('0');
            choice.click();
            break;
        case '1':
            choice = document.getElementById('1');
            choice.click();
            break;
        case '2':
            choice = document.getElementById('2');
            choice.click();
            break;
        case '3':
            choice = document.getElementById('3');
            choice.click();
            break;
        case '4':
            choice = document.getElementById('4');
            choice.click();
            break;
        case '5':
            choice = document.getElementById('5');
            choice.click();
            break;
        case '6':
            choice = document.getElementById('6');
            choice.click();
            break;
        case '7':
            choice = document.getElementById('7');
            choice.click();
            break;
        case '8':
            choice = document.getElementById('8');
            choice.click();
            break;
        case '9':
            choice = document.getElementById('9');
            choice.click();
            break;
        case '.':
            choice = document.getElementById('.');
            choice.click();
            break;
        case '+':
            choice = document.getElementById('+');
            choice.click();
            break;
        case '-':
            choice = document.getElementById('-');
            choice.click();
            break;
        case '*':
            choice = document.getElementById('*');
            choice.click();
            break;
        case '/':
            choice = document.getElementById('/');
            choice.click();
            break;
        case 'Enter':
            e.preventDefault();
            choice = document.getElementById('=');
            choice.click();
            break;
        case '=':
            choice = document.getElementById('=');
            choice.click();
            break;
        case 'c':
            choice = document.getElementById('clear');
            choice.click();
            break;
        case 'Backspace':
            choice = document.getElementById('backspace');
            choice.click();
            break;
    }
}

