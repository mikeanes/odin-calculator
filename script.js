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

const display = document.getElementById('digits');

const numberButtons = document.querySelectorAll('.key');

let displayValue = 0;


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(display.textContent === '0'){
            display.textContent = '';
        }
        display.textContent += button.textContent;
        displayValue = parseInt(display.textContent);
        console.log(displayValue);
    });
});

