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
let operator;
let inputNewNumber = false;
let hasEqualClicked = false;
let secondMinus = false;

const equals = document.getElementById('=');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const mult = document.getElementById('*');
const divi = document.getElementById('/');
const clear = document.getElementById('clear');

divi.addEventListener('click', () => {
    operator = '/';
    inputNewNumber = true;

    runningTotal = parseInt(display.textContent);
    if(currentNumber != 0){
        runningTotal = operate(runningTotal, '*', currentNumber);
        display.textContent = runningTotal;
    }
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
})

mult.addEventListener('click', () => {
   operator = '*';
   inputNewNumber = true;
   
   runningTotal = parseInt(display.textContent);
   if(currentNumber != 0){
   runningTotal = operate(runningTotal, '*', currentNumber);
   display.textContent = runningTotal;
   }
   if(hasEqualClicked){
    hasEqualClicked = false;
   }
});

minus.addEventListener('click', () => {
    
    operator = '-';
    inputNewNumber = true;
    if(secondMinus){
        currentNumber = parseInt(display.textContent);
    }else{
        runningTotal = parseInt(display.textContent);
        secondMinus = true;
    }
    runningTotal = operate(runningTotal, '-', currentNumber);
   
    display.textContent = runningTotal;
    if(hasEqualClicked){
        hasEqualClicked = false;
    }
});


plus.addEventListener('click', () => {
   operator = '+';
   inputNewNumber = true;
   currentNumber = parseInt(display.textContent);
   runningTotal = operate(runningTotal, '+', currentNumber);
   
   display.textContent = runningTotal;
   if(hasEqualClicked){
    hasEqualClicked = false;
   }
});

equals.addEventListener('click', () => {
    if(!hasEqualClicked){
    currentNumber = parseInt(display.textContent);
    runningTotal = operate(runningTotal, operator, currentNumber);
    display.textContent = runningTotal;
    hasEqualClicked = true;
    }
});

clear.addEventListener('click', () => {
    location.reload();
})


const display = document.getElementById('digits');

const numberButtons = document.querySelectorAll('.key');

//let displayValue = 0;

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
        //currentNumber = parseInt(display.textContent);
        
    });
});


