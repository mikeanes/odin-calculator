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

const display = document.getElementById('digits');
const numberButtons = document.querySelectorAll('.key');
const equals = document.getElementById('=');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('*');
const divi = document.getElementById('/');
const clear = document.getElementById('clear');

divi.addEventListener('click', () => {
    if(operator == null){
        operator = '/';
        runningTotal = parseInt(display.textContent);
    }else{
        equal();
        operator = '/';
    }
    inputNewNumber = true;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
})

mult.addEventListener('click', () => {
    if(operator == null){
        operator = '*';
        runningTotal = parseInt(display.textContent);
    }else{
        equal();
        operator = '*';
    }
    inputNewNumber = true;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
});

minus.addEventListener('click', () => {
    if(operator == null){
        operator = '-';
        runningTotal = parseInt(display.textContent);
    }else{
        equal();
        operator = '-';
    }

    inputNewNumber = true;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
});


plus.addEventListener('click', (event) => {
    operatorButtons(event);    
});

equals.addEventListener('click', () => {
    if(!hasEqualClicked){
    equal();
    hasEqualClicked = true;
    operator = null;
    }
   
});

function equal(){
    currentNumber = parseInt(display.textContent);
    runningTotal = operate(runningTotal, operator, currentNumber);
    display.textContent = runningTotal;
};

function operatorButtons(event){
    if(operator == null){
        operator = event.target.id;
        runningTotal = parseInt(display.textContent);
   
    }else{
        equal();
        operator = event.target.id;
    }
    inputNewNumber = true;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
};


clear.addEventListener('click', () => {
    location.reload();
})




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


