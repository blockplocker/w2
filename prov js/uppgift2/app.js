
let app = document.querySelector('.app');
let div = document.createElement('div');
let text = document.createElement('p');
let button = document.createElement('button');

app.appendChild(div);
div.appendChild(text);
div.appendChild(button);

let number = 0;
function addNumber() {
        number++;
        text.textContent +=', '+number;
}
function removeButton() {
    button.remove();
}

button.textContent = "Klicka på mig...";
text.textContent = number


button.addEventListener('click', () => {
    if (number == 9) {
        removeButton()
    } else {
        addNumber();
    }
})

