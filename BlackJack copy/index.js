let player = {
    name: "noa",
    chips: 200,
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let cardImg1 = document.getElementById("img-1");
let cardImg2 = document.getElementById("img-2");
let cardImg3 = document.getElementById("img-3");
let cardImg4 = document.getElementById("img-4");


playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;
    return number;
}

function cardimg(card) {
    if (card === 1) {
        return "/BlackJack copy/images/hearts_ace.svg";
    } else if (card < 11) {
        return "/BlackJack copy/images/hearts_" + card + ".svg";
    } else if (card === 11) {
        return "/BlackJack copy/images/hearts_jack.svg";
    } else if (card === 12) {
        return "/BlackJack copy/images/hearts_queen.svg";
    } else if (card === 13) {
        return "/BlackJack copy/images/hearts_king.svg";
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardImg1.src = cardimg(firstCard);
    cardImg2.src = cardimg(secondCard);
    if (firstCard > 10) {
        firstCard = 10;
    }
    if (secondCard > 10) {
        secondCard = 10;
    }

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    playerEl.textContent = player.name + ": $" + player.chips;
    cardsEl.textContent = "Cards: ";
    for (let count = 0; count < cards.length; count++) {
        cardsEl.textContent += cards[count] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        const element = document.querySelector(".card-container");
        const card = document.createElement("img");

        let newCard = getRandomCard();
        card.src = cardimg(newCard);
        card.setAttribute("id", "img" );
        element.appendChild(card);

        if (newCard > 10) {
            newCard = 10;
        }

        cards.push(newCard);
        sum += newCard;
        renderGame();
    }
}
