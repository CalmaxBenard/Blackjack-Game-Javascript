let firstCard = 12
let secondCard = 12
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw another card? 😊")
}

else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 💪")
}
else {
    console.log("You're out of the game! 😭")
}