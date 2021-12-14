console.log('PROJECT 1: ROULETTE');

const instructionsButton = document.querySelector('#instructions')
const instructionsText = document.querySelector('.instructionsDiv')

instructionsButton.addEventListener('click', ()=> {
  if (instructionsText.style.opacity == 100) {
    instructionsText.style.opacity = 0
  } else if (instructionsText.style.opacity == 0) {
    instructionsText.style.opacity = 100
  }
})
