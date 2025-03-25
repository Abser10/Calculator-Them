const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let resultDisplayed = false;

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.id == 'clear') {
            display.innerText = '';
            resultDisplayed = false; // Reset flag
        } else if (button.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && button.id == 'equal') {
            try {
                display.innerText = eval(display.innerText);
                resultDisplayed = true;
            } catch {
                display.innerText = 'Error';
                setTimeout(() => display.innerText = '', 2000);
                resultDisplayed = false;
            }
        } else if (display.innerText === '' && button.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => display.innerText = '', 2000);
            resultDisplayed = false;
        } else {
            if (resultDisplayed) {
                display.innerText = '';
                resultDisplayed = false;
            }
            display.innerText += button.id;
        }
    };
});

const themeToggleBtn = document.querySelector('.theme-toggier');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
};