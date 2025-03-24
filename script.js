const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.onclick = () => {
        if (button.id == 'clear') {
            display.innerText = '';
        } else if (button.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText !== '' && button.id == 'equal') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
                setTimeout(() => display.innerText = '', 2000);
            }
        } else if (display.innerText === '' && button.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => display.innerText = '', 2000);
        } else {
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