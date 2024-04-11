// FUNCTION --------------------------------------------------------------------------------
function createTag(type, text = null) {
    let el = document.createElement(type);
    el.textContent = text;
    return el;
}

function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function newGame() {
    if (points > localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", points);
    }
    highScore.textContent = "Highscore: " + localStorage.getItem("highscore");
    points = 0;
    displayNum();
}

function displayNum() {
    number = newNumber;
    numberEl.textContent = number;
    pointsEl.textContent = "Points: " + points;
}

// APP -------------------------------------------------------------------------------------
let app = document.querySelector(".app");

// LocalStorage ----------------------------------------------------------------------------
if (localStorage.getItem("highscore") == null) {
    localStorage.setItem("highscore", 0);
}

// SKAPA -----------------------------------------------------------------------------------
let div = createTag("div");
let numberEl = createTag("p", "number");

let lägre = createTag("button", "Lägre");
let lika = createTag("button", "Lika");
let högre = createTag("button", "Högre");

let pointsEl = createTag("p", "Points: 0");
let highScore = createTag(
    "p",
    "Highscore: " + localStorage.getItem("highscore")
);

// MODIFIERA -------------------------------------------------------------------------------

let number = randomNumber();
let newNumber = 0;
let points = 0;

numberEl.textContent = number;

// APPEND ----------------------------------------------------------------------------------

app.appendChild(div);
div.appendChild(numberEl);

div.appendChild(lägre);
div.appendChild(lika);
div.appendChild(högre);

div.appendChild(pointsEl);
div.appendChild(highScore);

// EVENET ----------------------------------------------------------------------------------

lägre.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber < number) {
        points += 1;
        displayNum();
    } else {
        newGame();
    }
});

lika.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber == number) {
        points += 5;
        displayNum();
    } else {
        newGame();
    }
});

högre.addEventListener("click", function () {
    newNumber = randomNumber();
    if (newNumber > number) {
        points += 1;
        displayNum();
    } else {
        newGame();
    }
});
