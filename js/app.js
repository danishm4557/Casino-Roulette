console.log('PROJECT 1: ROULETTE');

///////////// INSTRUCTIONS DROP DOWN /////////////////
const instructionsButton = document.querySelector('#instructions')
const instructionsText = document.querySelector('.instructionsDiv')

instructionsButton.addEventListener('click', ()=> {
  if (instructionsText.style.opacity == 100) {
    instructionsText.style.opacity = 0
  } else if (instructionsText.style.opacity == 0) {
    instructionsText.style.opacity = 100
  }
})
/////////////////////////////////////////////////////


/////////////////////// WALLET //////////////////////
// RANDOM WALLET AMOUNT
let wallet = Math.floor(Math.random() * (100 - 50 + 1) + 50)
console.log(wallet);
document.querySelector('#balance').innerText = `Balance: $${wallet}`
////////////////////////////////////////////////////
