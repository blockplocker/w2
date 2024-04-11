function createTag(type, text = null) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
}

let app = document.querySelector(".app");
let div = document.createElement("div");
app.appendChild(div);
let numberEl = createTag("p", "number");
div.appendChild(numberEl);

let lägre = createTag("button", "Lägre");
let lika = createTag("button", "Lika");
let högre = createTag("button", "Högre");

div.appendChild(lägre);
div.appendChild(lika);
div.appendChild(högre);

let pointsEl = createTag("p", "Points: 0");
div.appendChild(pointsEl);

if (localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 0);
}
let highScore = createTag("p","Highscore: " + localStorage.getItem("highscore"));
div.appendChild(highScore);

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function newGame() {
    if (points > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", points);
    }
    highScore.textContent = "Highscore: " + localStorage.getItem("highscore");
    points = 0;
    displayNum()
}

function displayNum() {
    number = newNumber;
    numberEl.textContent = number;
    pointsEl.textContent = "Points: " + points;
}

let number = randomNumber();
let newNumber = 0;
let points = 0;
numberEl.textContent = number;

lägre.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber < number) {
        points += 1;
        displayNum()
    } else {
        newGame();
    }
});

lika.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber == number) {
        points += 5;
        displayNum()
        } else {
        newGame();
    }
});

högre.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber > number) {
        points += 1;
        displayNum()
    } else {
        newGame();
    }
});


// FUNCTION

// APP

// SKAPA

// MODIFIERA

// APPEND

// EVENET