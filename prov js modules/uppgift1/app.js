

let app = document.querySelector('.app');
let div = document.createElement('div');
let text = document.createElement('p');
let button = document.createElement('button');

app.appendChild(div);
div.appendChild(text);
div.appendChild(button);

let letterNumber = 65;

button.textContent = "Click on me...";
text.textContent = String.fromCharCode(letterNumber);


button.addEventListener('click', () => {
    letterNumber ++;
    if (letterNumber > 90) {
        letterNumber = 65;
    }
    text.textContent = String.fromCharCode(letterNumber);
})
