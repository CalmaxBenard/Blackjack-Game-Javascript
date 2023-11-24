let cards = []
let computerCards = []
let firstCard = 0
let secondCard = 0
let sumComputer = 0
let firstCompCard = 0
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

let player = {
    name: "Carlmax",
    chips: prize()
}


function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    firstCompCard = getRandomCard()

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
        message = "You win with a Blackjack!"
        playerEl.innerHTML = "Congratulations! " + "You win" + ": $" + player.chips
        hasBlackJack = true
    }
    else {
        message = "You're out of the game! Computer wins."
        isAlive = false
    }
    messageEl.innerHTML = message
    return message
}


function endGame() {
    if (isAlive === false) {
        resetGame()
    }
    else{
        let secondCompCard = getRandomCard()
        let sumComp = firstCompCard + secondCompCard
        if (sumComp === 21) {
            message = "Computer wins with a Blackjack"
        }
        while (sumPlayer > sumComp && sumPlayer < 21){
            let CompCard = getRandomCard()
            sumComp += CompCard
            if (sumComp === 21) {
                message = "Computer wins with a Blackjack"
            }
            else if (sumComp > sumPlayer && sumComp < 21 && sumPlayer < 21){
                message = "Computer wins with a total of: " + sumComp
            }
            else if (sumComp === sumPlayer) {
                message = "The game ends in a draw!"
            }
        
            else {
                message = "You win the game! Computer total was: " + sumComp 
                playerEl.innerHTML = "Congratulations! " + "You win" + ": $" + player.chips
            }
        }
        
        
        messageEl.innerHTML = message
    }
    
}

function resetGame() {
    isAlive = false
    sumEl.innerHTML = "Sum: " 
    compCardsEl.innerHTML = "" 
    cardsEl.innerHTML = "Cards: " 
    messageEl.innerHTML = "Want to play a round?"
    playerEl.innerHTML = ""
}

function prize(){
    let trophy = Math.floor(Math.random() * 300) + 100
    return trophy
}