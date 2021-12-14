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
/////////////////////////////////////////////////////




let totalBet = 0



option0WinningAmount = 0
option1WinningAmount = 0
option2WinningAmount = 0
option3WinningAmount = 0
option4WinningAmount = 0
option5WinningAmount = 0
option6WinningAmount = 0
option7WinningAmount = 0
option8WinningAmount = 0
option9WinningAmount = 0
option10WinningAmount = 0
option11WinningAmount = 0
option12WinningAmount = 0
option13WinningAmount = 0
option14WinningAmount = 0
option15WinningAmount = 0
option16WinningAmount = 0
option17WinningAmount = 0
option18WinningAmount = 0
option19WinningAmount = 0
option20WinningAmount = 0
option21WinningAmount = 0
option22WinningAmount = 0
option23WinningAmount = 0
option24WinningAmount = 0
option25WinningAmount = 0
option26WinningAmount = 0
option27WinningAmount = 0
option28WinningAmount = 0
option29WinningAmount = 0
option30WinningAmount = 0
option31WinningAmount = 0
option32WinningAmount = 0
option33WinningAmount = 0
option34WinningAmount = 0
option35WinningAmount = 0
option36WinningAmount = 0
option1Over2WinningAmount = 0
option2Over3WinningAmount = 0
option4Over5WinningAmount = 0
option5Over6WinningAmount = 0
option7Over8WinningAmount = 0
option8Over9WinningAmount = 0
option10Over11WinningAmount = 0
option11Over12WinningAmount = 0
option13Over14WinningAmount = 0
option14Over15WinningAmount = 0
option16ver17WinningAmount = 0
option17ver18WinningAmount = 0
option19Over20WinningAmount = 0
option20Over21WinningAmount = 0
option22Over23WinningAmount = 0
option23Over24WinningAmount = 0
option25Over26WinningAmount = 0
option26Over27WinningAmount = 0
option28Over29WinningAmount = 0
option29Over30WinningAmount = 0
option31Over32WinningAmount = 0
option32Over33WinningAmount = 0
option34Over35WinningAmount = 0
option35Over36WinningAmount = 0
option2To1OneWinningAmount = 0
option2To1TwoWinningAmount = 0
option2To1ThreeWinningAmount = 0
option1st12WinningAmount = 0
option2nd12WinningAmount = 0
option3rd12WinningAmount = 0
option1To18WinningAmount = 0
optionEvenWinningAmount = 0
optionRedWinningAmount = 0
optionBlackWinningAmount = 0
optionOddWinningAmount = 0
option19To36WinningAmount = 0
option1to5WinningAmount = 0
option2to6WinningAmount = 0
option4to8WinningAmount = 0
option5to9WinningAmount = 0
option7to11WinningAmount = 0
option8to12WinningAmount = 0
option10to14WinningAmount = 0
option11to15WinningAmount = 0
option13to17WinningAmount = 0
option14to18WinningAmount = 0
option16to20WinningAmount = 0
option17to21WinningAmount = 0
option19to23WinningAmount = 0
option20to24WinningAmount = 0
option22to26WinningAmount = 0
option23to27WinningAmount = 0
option25to29WinningAmount = 0
option26to30WinningAmount = 0
option28to32WinningAmount = 0
option29to33WinningAmount = 0
option31to35WinningAmount = 0
option32to36WinningAmount = 0





let option1Click = 0
let option2Click = 0
let option3Click = 0
let option4Click = 0
let option5Click = 0
let option6Click = 0
let option7Click = 0
let option8Click = 0
let option9Click = 0
let option10Click = 0
let option11Click = 0
let option12Click = 0
let option13Click = 0
let option14Click = 0
let option15Click = 0
let option16Click = 0
let option17Click = 0
let option18Click = 0
let option19Click = 0
let option20Click = 0
let option21Click = 0
let option22Click = 0
let option23Click = 0
let option24Click = 0
let option25Click = 0
let option26Click = 0
let option27Click = 0
let option28Click = 0
let option29Click = 0
let option30Click = 0
let option31Click = 0
let option32Click = 0
let option33Click = 0
let option34Click = 0
let option35Click = 0
let option36Click = 0
let option1Over2Click = 0
let option2Over3Click = 0
let option4Over5Click = 0
let option5Over6Click = 0
let option7Over8Click = 0
let option8Over9Click = 0
let option10Over11Click = 0
let option11Over12Click = 0
let option13Over14Click = 0
let option14Over15Click = 0
let option16ver17Click = 0
let option17ver18Click = 0
let option19Over20Click = 0
let option20Over21Click = 0
let option22Over23Click = 0
let option23Over24Click = 0
let option25Over26Click = 0
let option26Over27Click = 0
let option28Over29Click = 0
let option29Over30Click = 0
let option31Over32Click = 0
let option32Over33Click = 0
let option34Over35Click = 0
let option35Over36Click = 0
let option2To1OneClick = 0
let option2To1TwoClick = 0
let option2To1ThreeClick = 0
let option1st12Click = 0
let option2nd12Click = 0
let option3rd12Click = 0
let option1To18Click = 0
let optionEvenClick = 0
let optionRedClick = 0
let optionBlackClick = 0
let optionOddClick = 0
let option19To36Click = 0
let option1to5Click = 0
let option2to6Click = 0
let option4to8Click = 0
let option5to9Click = 0
let option7to11Click = 0
let option8to12Click = 0
let option10to14Click = 0
let option11to15Click = 0
let option13to17Click = 0
let option14to18Click = 0
let option16to20Click = 0
let option17to21Click = 0
let option19to23Click = 0
let option20to24Click = 0
let option22to26Click = 0
let option23to27Click = 0
let option25to29Click = 0
let option26to30Click = 0
let option28to32Click = 0
let option29to33Click = 0
let option31to35Click = 0
let option32to36Click = 0








/////////////////// CLEAR BUTTON FUNCTION //////////////////
const clear = document.querySelector('#clearButton')
clear.addEventListener('click', () => {
  wallet += totalBet
  totalBet = 0

  option0WinningAmount = 0
  option1WinningAmount = 0
  option2WinningAmount = 0
  option3WinningAmount = 0
  option4WinningAmount = 0
  option5WinningAmount = 0
  option6WinningAmount = 0
  option7WinningAmount = 0
  option8WinningAmount = 0
  option9WinningAmount = 0
  option10WinningAmount = 0
  option11WinningAmount = 0
  option12WinningAmount = 0
  option13WinningAmount = 0
  option14WinningAmount = 0
  option15WinningAmount = 0
  option16WinningAmount = 0
  option17WinningAmount = 0
  option18WinningAmount = 0
  option19WinningAmount = 0
  option20WinningAmount = 0
  option21WinningAmount = 0
  option22WinningAmount = 0
  option23WinningAmount = 0
  option24WinningAmount = 0
  option25WinningAmount = 0
  option26WinningAmount = 0
  option27WinningAmount = 0
  option28WinningAmount = 0
  option29WinningAmount = 0
  option30WinningAmount = 0
  option31WinningAmount = 0
  option32WinningAmount = 0
  option33WinningAmount = 0
  option34WinningAmount = 0
  option35WinningAmount = 0
  option36WinningAmount = 0
  option1Over2WinningAmount = 0
  option2Over3WinningAmount = 0
  option4Over5WinningAmount = 0
  option5Over6WinningAmount = 0
  option7Over8WinningAmount = 0
  option8Over9WinningAmount = 0
  option10Over11WinningAmount = 0
  option11Over12WinningAmount = 0
  option13Over14WinningAmount = 0
  option14Over15WinningAmount = 0
  option16ver17WinningAmount = 0
  option17ver18WinningAmount = 0
  option19Over20WinningAmount = 0
  option20Over21WinningAmount = 0
  option22Over23WinningAmount = 0
  option23Over24WinningAmount = 0
  option25Over26WinningAmount = 0
  option26Over27WinningAmount = 0
  option28Over29WinningAmount = 0
  option29Over30WinningAmount = 0
  option31Over32WinningAmount = 0
  option32Over33WinningAmount = 0
  option34Over35WinningAmount = 0
  option35Over36WinningAmount = 0
  option2To1OneWinningAmount = 0
  option2To1TwoWinningAmount = 0
  option2To1ThreeWinningAmount = 0
  option1st12WinningAmount = 0
  option2nd12WinningAmount = 0
  option3rd12WinningAmount = 0
  option1To18WinningAmount = 0
  optionEvenWinningAmount = 0
  optionRedWinningAmount = 0
  optionBlackWinningAmount = 0
  optionOddWinningAmount = 0
  option19To36WinningAmount = 0
  option1to5WinningAmount = 0
  option2to6WinningAmount = 0
  option4to8WinningAmount = 0
  option5to9WinningAmount = 0
  option7to11WinningAmount = 0
  option8to12WinningAmount = 0
  option10to14WinningAmount = 0
  option11to15WinningAmount = 0
  option13to17WinningAmount = 0
  option14to18WinningAmount = 0
  option16to20WinningAmount = 0
  option17to21WinningAmount = 0
  option19to23WinningAmount = 0
  option20to24WinningAmount = 0
  option22to26WinningAmount = 0
  option23to27WinningAmount = 0
  option25to29WinningAmount = 0
  option26to30WinningAmount = 0
  option28to32WinningAmount = 0
  option29to33WinningAmount = 0
  option31to35WinningAmount = 0
  option32to36WinningAmount = 0



  option1Click = 0
  option2Click = 0
  option3Click = 0
  option4Click = 0
  option5Click = 0
  option6Click = 0
  option7Click = 0
  option8Click = 0
  option9Click = 0
  option10Click = 0
  option11Click = 0
  option12Click = 0
  option13Click = 0
  option14Click = 0
  option15Click = 0
  option16Click = 0
  option17Click = 0
  option18Click = 0
  option19Click = 0
  option20Click = 0
  option21Click = 0
  option22Click = 0
  option23Click = 0
  option24Click = 0
  option25Click = 0
  option26Click = 0
  option27Click = 0
  option28Click = 0
  option29Click = 0
  option30Click = 0
  option31Click = 0
  option32Click = 0
  option33Click = 0
  option34Click = 0
  option35Click = 0
  option36Click = 0
  option1Over2Click = 0
  option2Over3Click = 0
  option4Over5Click = 0
  option5Over6Click = 0
  option7Over8Click = 0
  option8Over9Click = 0
  option10Over11Click = 0
  option11Over12Click = 0
  option13Over14Click = 0
  option14Over15Click = 0
  option16ver17Click = 0
  option17ver18Click = 0
  option19Over20Click = 0
  option20Over21Click = 0
  option22Over23Click = 0
  option23Over24Click = 0
  option25Over26Click = 0
  option26Over27Click = 0
  option28Over29Click = 0
  option29Over30Click = 0
  option31Over32Click = 0
  option32Over33Click = 0
  option34Over35Click = 0
  option35Over36Click = 0
  option2To1OneClick = 0
  option2To1TwoClick = 0
  option2To1ThreeClick = 0
  option1st12Click = 0
  option2nd12Click = 0
  option3rd12Click = 0
  option1To18Click = 0
  optionEvenClick = 0
  optionRedClick = 0
  optionBlackClick = 0
  optionOddClick = 0
  option19To36Click = 0
  option1to5Click = 0
  option2to6Click = 0
  option4to8Click = 0
  option5to9Click = 0
  option7to11Click = 0
  option8to12Click = 0
  option10to14Click = 0
  option11to15Click = 0
  option13to17Click = 0
  option14to18Click = 0
  option16to20Click = 0
  option17to21Click = 0
  option19to23Click = 0
  option20to24Click = 0
  option22to26Click = 0
  option23to27Click = 0
  option25to29Click = 0
  option26to30Click = 0
  option28to32Click = 0
  option29to33Click = 0
  option31to35Click = 0
  option32to36Click = 0

  document.querySelector('#winningAmount').innerText = `Winning Amount: $${option1WinningAmount}`
  console.log(totalBet);
  console.log(wallet);
  document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
  document.querySelector('#balance').innerText = `Balance: $${wallet}`
  document.querySelector('#chip1').style.opacity = 0
  document.querySelector('#chip2').style.opacity = 0
  document.querySelector('#chip3').style.opacity = 0
  document.querySelector('#chip4').style.opacity = 0
  document.querySelector('#chip5').style.opacity = 0
  document.querySelector('#chip6').style.opacity = 0
  document.querySelector('#chip7').style.opacity = 0
  document.querySelector('#chip8').style.opacity = 0
  document.querySelector('#chip9').style.opacity = 0
  document.querySelector('#chip10').style.opacity = 0
  document.querySelector('#chip11').style.opacity = 0
  document.querySelector('#chip12').style.opacity = 0
  document.querySelector('#chip13').style.opacity = 0
  document.querySelector('#chip14').style.opacity = 0
  document.querySelector('#chip15').style.opacity = 0
  document.querySelector('#chip16').style.opacity = 0
  document.querySelector('#chip17').style.opacity = 0
  document.querySelector('#chip18').style.opacity = 0
  document.querySelector('#chip19').style.opacity = 0
  document.querySelector('#chip20').style.opacity = 0
  document.querySelector('#chip21').style.opacity = 0
  document.querySelector('#chip22').style.opacity = 0
  document.querySelector('#chip23').style.opacity = 0
  document.querySelector('#chip24').style.opacity = 0
  document.querySelector('#chip25').style.opacity = 0
  document.querySelector('#chip26').style.opacity = 0
  document.querySelector('#chip27').style.opacity = 0
  document.querySelector('#chip28').style.opacity = 0
  document.querySelector('#chip29').style.opacity = 0
  document.querySelector('#chip30').style.opacity = 0
  document.querySelector('#chip31').style.opacity = 0
  document.querySelector('#chip32').style.opacity = 0
  document.querySelector('#chip33').style.opacity = 0
  document.querySelector('#chip34').style.opacity = 0
  document.querySelector('#chip35').style.opacity = 0
  document.querySelector('#chip36').style.opacity = 0

})







const option1 = document.querySelector('#option1')
option1.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option1 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip1').style.opacity = 100
    option1Click++
  }
})

const option2 = document.querySelector('#option2')
option2.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option2 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2').style.opacity = 100
    option2Click++
  }
})

const option3 = document.querySelector('#option3')
option3.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option3 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2').style.opacity = 100
    option3Click++
  }
})

const option4 = document.querySelector('#option4')
option4.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option4 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2').style.opacity = 100
    option4Click++
  }
})

const option5 = document.querySelector('#option5')
option5.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option5 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2').style.opacity = 100
    option5Click++
  }
})


///////// ADD ALL option**WinningAmounts /////////////
// const totalWinningAmount = option1WinningAmount + option2WinningAmount
//
// document.querySelector('#winningAmount').innerText = `Winning Amount: $${totalWinningAmount}`


const spin = document.querySelector('#spinButton')
spin.addEventListener('click', ()=>{

  option0WinningAmount = 0
  option1WinningAmount = 0
  option2WinningAmount = 0
  option3WinningAmount = 0
  option4WinningAmount = 0
  option5WinningAmount = 0
  option6WinningAmount = 0
  option7WinningAmount = 0
  option8WinningAmount = 0
  option9WinningAmount = 0
  option10WinningAmount = 0
  option11WinningAmount = 0
  option12WinningAmount = 0
  option13WinningAmount = 0
  option14WinningAmount = 0
  option15WinningAmount = 0
  option16WinningAmount = 0
  option17WinningAmount = 0
  option18WinningAmount = 0
  option19WinningAmount = 0
  option20WinningAmount = 0
  option21WinningAmount = 0
  option22WinningAmount = 0
  option23WinningAmount = 0
  option24WinningAmount = 0
  option25WinningAmount = 0
  option26WinningAmount = 0
  option27WinningAmount = 0
  option28WinningAmount = 0
  option29WinningAmount = 0
  option30WinningAmount = 0
  option31WinningAmount = 0
  option32WinningAmount = 0
  option33WinningAmount = 0
  option34WinningAmount = 0
  option35WinningAmount = 0
  option36WinningAmount = 0
  option1Over2WinningAmount = 0
  option2Over3WinningAmount = 0
  option4Over5WinningAmount = 0
  option5Over6WinningAmount = 0
  option7Over8WinningAmount = 0
  option8Over9WinningAmount = 0
  option10Over11WinningAmount = 0
  option11Over12WinningAmount = 0
  option13Over14WinningAmount = 0
  option14Over15WinningAmount = 0
  option16ver17WinningAmount = 0
  option17ver18WinningAmount = 0
  option19Over20WinningAmount = 0
  option20Over21WinningAmount = 0
  option22Over23WinningAmount = 0
  option23Over24WinningAmount = 0
  option25Over26WinningAmount = 0
  option26Over27WinningAmount = 0
  option28Over29WinningAmount = 0
  option29Over30WinningAmount = 0
  option31Over32WinningAmount = 0
  option32Over33WinningAmount = 0
  option34Over35WinningAmount = 0
  option35Over36WinningAmount = 0
  option2To1OneWinningAmount = 0
  option2To1TwoWinningAmount = 0
  option2To1ThreeWinningAmount = 0
  option1st12WinningAmount = 0
  option2nd12WinningAmount = 0
  option3rd12WinningAmount = 0
  option1To18WinningAmount = 0
  optionEvenWinningAmount = 0
  optionRedWinningAmount = 0
  optionBlackWinningAmount = 0
  optionOddWinningAmount = 0
  option19To36WinningAmount = 0
  option1to5WinningAmount = 0
  option2to6WinningAmount = 0
  option4to8WinningAmount = 0
  option5to9WinningAmount = 0
  option7to11WinningAmount = 0
  option8to12WinningAmount = 0
  option10to14WinningAmount = 0
  option11to15WinningAmount = 0
  option13to17WinningAmount = 0
  option14to18WinningAmount = 0
  option16to20WinningAmount = 0
  option17to21WinningAmount = 0
  option19to23WinningAmount = 0
  option20to24WinningAmount = 0
  option22to26WinningAmount = 0
  option23to27WinningAmount = 0
  option25to29WinningAmount = 0
  option26to30WinningAmount = 0
  option28to32WinningAmount = 0
  option29to33WinningAmount = 0
  option31to35WinningAmount = 0
  option32to36WinningAmount = 0

  let randomNumber = Math.floor(Math.random() * 3)
  alert(`LUCKY NUMBER: ${randomNumber}`);


    /////// straightBetButtons Winners /////////////
  if (randomNumber === 1) {
    option1WinningAmount += option1Click * 5 * 35
  } else {
    option1WinningAmount -= option1Click * 5
  }

  if (randomNumber === 2) {
    option2WinningAmount += option2Click * 5 * 35
  } else {
    option2WinningAmount -= option2Click * 5
  }

    /////// 2To1Button Winners ///////////



    /////1st12Buttons Winners /////////////



    ///////// ColorButton Winners /////////////



    ///////// Even/Odd Winners ///////////////



    ////////// 1To18 & 19To36 Winners //////////////
  let totalWinningAmount = 0
  totalWinningAmount += option1WinningAmount + option2WinningAmount

  document.querySelector('#winningAmount').innerText = `Winning Amount: $${totalWinningAmount}`

  wallet = wallet + totalWinningAmount
  document.querySelector('#balance').innerText = `Balance: $${wallet}`
  // clearFunction()
})
