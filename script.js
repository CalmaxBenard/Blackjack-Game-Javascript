let cards = []
let computerCards = []
let sumComputer = 0
let firstCompCard = getRandomCard()
let sumPlayer = 0
let hasBlackJack = false
let isAlive = false
let message = ""


// Get html elements to modify
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let compCardsEl = document.querySelector("#compcards-el")
let compSumEl = document.querySelector("#compsum-el")

let player = {
    name: "Carlmax",
    chips: 145
}
playerEl.innerHTML = player.name + ": $" + player.chips

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sumPlayer = firstCard + secondCard

    isAlive = true
    renderGame()
}

function renderGame() {
    // Displaying computer first card
    compCardsEl.innerHTML = "First Computer Card: "
    compCardsEl.innerHTML += firstCompCard
   
    // Displaying player cards
    cardsEl.innerHTML = "Your Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.innerHTML += cards[i] + " "
    }
    sumEl.innerHTML = "Sum: " + sumPlayer
    
    // Display message to user
    feedback()
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sumPlayer += card
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

function feedback() {
    if (sumPlayer <= 20) {
        message = "Do you want to draw another card?"
    }
    
    else if (sumPlayer === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.innerHTML = message
    return message
}