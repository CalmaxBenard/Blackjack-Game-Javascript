let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


// Get html elements to modify
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

let player = {
    name: "Carlmax",
    chips: 145
}
playerEl.innerHTML = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.innerHTML = "Cards: " 
    
    for (let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += cards[i] + " "
    }
    sumEl.innerHTML = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw another card?"
    }
    
    else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerHTML = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }    
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1){
        return 11
    }
    else if (randomNum > 10) {
        return 10
    }
    else {
        return randomNum
    }           
}