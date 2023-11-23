let firstCard = 11
let secondCard = 2
let sum = firstCard + secondCard
let hasBlackJack = false
isAlive = true
message = ""

let messageEl = document.getElementById("message-el")

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
    messageEl.innerHTML = message
}
