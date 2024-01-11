
    let firstCard = 1
    let secondCard = 1
    let sum = firstCard + secondCard
    let hasBlackJack = false
    let isAlive = true
    let message = ""

    function startGame() {

    if (sum <= 20) {

        message = "Do you want to draw a new card? 🙂"

    }else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        
    } else {
        isAlive = false
        message = "You're out of the game! 😭"
    } 

    console.log(message)
}