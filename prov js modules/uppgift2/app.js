import { removeEl } from './modules/removeEl.js';

let app = document.querySelector('.app');
let div = document.createElement('div');
let text = document.createElement('p');
let button = document.createElement('button');

app.appendChild(div);
div.appendChild(text);
div.appendChild(button);

let number = 0;

button.textContent = "Klicka på mig...";
text.textContent = number

button.addEventListener('click', () => {
    if (number == 9) {
        removeEl(button)
    } else {
        number++;
        text.textContent +=', '+number;
    }
})