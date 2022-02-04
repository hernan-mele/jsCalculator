const display = document.querySelector("#display");
const decimal = document.querySelector("#decimal");

const updateDisplay = input => {

    if(display.textContent === "0" && !Number.isNaN(input)){
        display.textContent = input;
    }else if(Number.isInteger(input)){
        display.textContent += input
    }

    switch(input){
        case 'add':
            display.textContent += '+';
            break;
        case 'subtract':
            display.textContent += '-';
            break;
        case 'multiply':
            display.textContent += '*';
            break;
        case 'divide':
            display.textContent += '/';
            break;
        case 'decimal':
            if(!display.textContent.includes('.', display.textContent.length-2)){
                display.textContent += '.';
            }
            break;
        default:
            return;
    }
}

const clearDisplay = () => {
    display.textContent = "0";
}

const result = () => {
    let result = eval(display.textContent);
    display.textContent = result;
}