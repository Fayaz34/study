let palyer= {
    name: "fayaz",
    chips : 145
}

let cardsl = []
let sum = 0
let isAlive = false
let hasblackjack = false
let message = ""
let messageEl = document.getElementById('message_el')
let sumofcard = document.getElementById('sum_ofcard')
let cards = document.getElementById('card_s')
let player_el = document.getElementById('player-el')

player_el.textContent = palyer.name + ": $" + palyer.chips

function randomno(){
    let no = Math.floor(Math.random()*13) + 1
    if (no > 10 ){
        return 10
    }else if ( no === 1){
        return 11
    }else{
        return no
    }
}

function startgame(){
    isAlive = true
    let firstcard = randomno()
    let secondcard = randomno()
    cardsl = [firstcard,secondcard]
    sum =firstcard + secondcard
    rendergame()
}


function rendergame(){

    cards.textContent = "cards :"
    
    for (let i = 0; i < cardsl.length; i++ ){
        cards.textContent += cardsl[i] + " "
    }
    sumofcard.textContent = "sum : " + sum

    if (sum<=20){
        message = "do you want to draw a new card?"
    }else if(sum === 21){
        message = "wohoo! You've got Blackjack!"
        hasblackjack = true
    }else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    
}

function newCard(){
    if(isAlive === true && hasblackjack === false){
      let card = randomno()
      sum +=card
      cardsl.push(card)
      startgame()
    }
}