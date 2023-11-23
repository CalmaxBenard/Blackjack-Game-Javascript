let firstCard = 11
let secondCard = 12
let sum = firstCard + secondCard
let hasBlackJack = false
isAlive = true
message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card? 😊"
    }
    
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 💪"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)
}
