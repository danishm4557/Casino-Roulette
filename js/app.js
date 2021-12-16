console.log('PROJECT 1: ROULETTE');

///////////// INSTRUCTIONS DROP DOWN /////////////////
const instructionsButton = document.querySelector('#instructions')
const instructionsText = document.querySelector('.instructionsDiv')

instructionsButton.addEventListener('click', ()=> {
  if (instructionsText.style.opacity == 100) {
    instructionsText.style.opacity = 0
    instructionsText.style.zIndex = -3
  } else if (instructionsText.style.opacity == 0) {
    instructionsText.style.opacity = 100
    instructionsText.style.zIndex = 3
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




let option0Click = 0
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
let option16Over17Click = 0
let option17Over18Click = 0
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


  option0Click = 0
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
  option16Over17Click = 0
  option17Over18Click = 0
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
  document.querySelector('#chip0').style.opacity = 0
  document.querySelector('#chip0').style.opacity = 0
  document.querySelector('#chip2To1One').style.opacity = 0
  document.querySelector('#chip2To1Two').style.opacity = 0
  document.querySelector('#chip2To1Three').style.opacity = 0
  document.querySelector('#chip1st12').style.opacity = 0
  document.querySelector('#chip2nd12').style.opacity = 0
  document.querySelector('#chip3rd12').style.opacity = 0
  document.querySelector('#chip1To18').style.opacity = 0
  document.querySelector('#chipEven').style.opacity = 0
  document.querySelector('#chipRed').style.opacity = 0
  document.querySelector('#chipBlack').style.opacity = 0
  document.querySelector('#chipOdd').style.opacity = 0
  document.querySelector('#chip19To36').style.opacity = 0
  document.querySelector('#chip1Over2').style.opacity = 0
  document.querySelector('#chip2Over3').style.opacity = 0
  document.querySelector('#chip4Over5').style.opacity = 0
  document.querySelector('#chip5Over6').style.opacity = 0
  document.querySelector('#chip7Over8').style.opacity = 0
  document.querySelector('#chip8Over9').style.opacity = 0
  document.querySelector('#chip10Over11').style.opacity = 0
  document.querySelector('#chip11Over12').style.opacity = 0
  document.querySelector('#chip13Over14').style.opacity = 0
  document.querySelector('#chip14Over15').style.opacity = 0
  document.querySelector('#chip16Over17').style.opacity = 0
  document.querySelector('#chip17Over18').style.opacity = 0
  document.querySelector('#chip19Over20').style.opacity = 0
  document.querySelector('#chip20Over21').style.opacity = 0
  document.querySelector('#chip22Over23').style.opacity = 0
  document.querySelector('#chip23Over24').style.opacity = 0
  document.querySelector('#chip25Over26').style.opacity = 0
  document.querySelector('#chip26Over27').style.opacity = 0
  document.querySelector('#chip28Over29').style.opacity = 0
  document.querySelector('#chip29Over30').style.opacity = 0
  document.querySelector('#chip31Over32').style.opacity = 0
  document.querySelector('#chip32Over33').style.opacity = 0
  document.querySelector('#chip34Over35').style.opacity = 0
  document.querySelector('#chip35Over36').style.opacity = 0
  document.querySelector('#chip1To5').style.opacity = 0
  document.querySelector('#chip2To6').style.opacity = 0
  document.querySelector('#chip4To8').style.opacity = 0
  document.querySelector('#chip5To9').style.opacity = 0
  document.querySelector('#chip7To11').style.opacity = 0
  document.querySelector('#chip8To12').style.opacity = 0
  document.querySelector('#chip10To14').style.opacity = 0
  document.querySelector('#chip11To15').style.opacity = 0
  document.querySelector('#chip13To17').style.opacity = 0
  document.querySelector('#chip14To18').style.opacity = 0
  document.querySelector('#chip16To20').style.opacity = 0
  document.querySelector('#chip17To21').style.opacity = 0
  document.querySelector('#chip19To23').style.opacity = 0
  document.querySelector('#chip20To24').style.opacity = 0
  document.querySelector('#chip22To26').style.opacity = 0
  document.querySelector('#chip23To27').style.opacity = 0
  document.querySelector('#chip25To29').style.opacity = 0
  document.querySelector('#chip26To30').style.opacity = 0
  document.querySelector('#chip28To32').style.opacity = 0
  document.querySelector('#chip29To33').style.opacity = 0
  document.querySelector('#chip31To35').style.opacity = 0
  document.querySelector('#chip32To36').style.opacity = 0











})



//
const option0 = document.querySelector('#option0')
option0.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option0 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip0').style.opacity = 100
    option0Click++
  }
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
    document.querySelector('#chip3').style.opacity = 100
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
    document.querySelector('#chip4').style.opacity = 100
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
    document.querySelector('#chip5').style.opacity = 100
    option5Click++
  }
})

const option6 = document.querySelector('#option6')
option6.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option6 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip6').style.opacity = 100
    option6Click++
  }
})

const option7 = document.querySelector('#option7')
option7.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option7 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip7').style.opacity = 100
    option7Click++
  }
})

const option8 = document.querySelector('#option8')
option8.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option8 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip8').style.opacity = 100
    option8Click++
  }
})

const option9 = document.querySelector('#option9')
option9.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option9 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip9').style.opacity = 100
    option9Click++
  }
})

const option10 = document.querySelector('#option10')
option10.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option10 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip10').style.opacity = 100
    option10Click++
  }
})

const option11 = document.querySelector('#option11')
option11.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option11 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip11').style.opacity = 100
    option11Click++
  }
})

const option12 = document.querySelector('#option12')
option12.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option12 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip12').style.opacity = 100
    option12Click++
  }
})

const option13 = document.querySelector('#option13')
option13.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option13 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip13').style.opacity = 100
    option13Click++
  }
})

const option14 = document.querySelector('#option14')
option14.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option14 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip14').style.opacity = 100
    option14Click++
  }
})

const option15 = document.querySelector('#option15')
option15.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option15 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip15').style.opacity = 100
    option15Click++
  }
})

const option16 = document.querySelector('#option16')
option16.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option16 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip16').style.opacity = 100
    option16Click++
  }
})

const option17 = document.querySelector('#option17')
option17.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option17 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip17').style.opacity = 100
    option17Click++
  }
})

const option18 = document.querySelector('#option18')
option18.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option18 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip18').style.opacity = 100
    option18Click++
  }
})

const option19 = document.querySelector('#option19')
option19.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option19 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip19').style.opacity = 100
    option19Click++
  }
})

const option20 = document.querySelector('#option20')
option20.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option20 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip20').style.opacity = 100
    option20Click++
  }
})

const option21 = document.querySelector('#option21')
option21.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option21 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip21').style.opacity = 100
    option21Click++
  }
})

const option22 = document.querySelector('#option22')
option22.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option22 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip22').style.opacity = 100
    option22Click++
  }
})

const option23 = document.querySelector('#option23')
option23.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option23 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip23').style.opacity = 100
    option23Click++
  }
})

const option24 = document.querySelector('#option24')
option24.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option24 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip24').style.opacity = 100
    option24Click++
  }
})

const option25 = document.querySelector('#option25')
option25.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option25 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip25').style.opacity = 100
    option25Click++
  }
})

const option26 = document.querySelector('#option26')
option26.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option26 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip26').style.opacity = 100
    option26Click++
  }
})

const option27 = document.querySelector('#option27')
option27.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option27 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip27').style.opacity = 100
    option27Click++
  }
})

const option28 = document.querySelector('#option28')
option28.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option20 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip28').style.opacity = 100
    option28Click++
  }
})

const option29 = document.querySelector('#option29')
option29.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option29 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip29').style.opacity = 100
    option29Click++
  }
})

const option30 = document.querySelector('#option30')
option30.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option30 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip30').style.opacity = 100
    option30Click++
  }
})

const option31 = document.querySelector('#option31')
option31.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option31 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip31').style.opacity = 100
    option31Click++
  }
})

const option32 = document.querySelector('#option32')
option32.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option32 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip32').style.opacity = 100
    option32Click++
  }
})

const option33 = document.querySelector('#option33')
option33.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option33 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip33').style.opacity = 100
    option33Click++
  }
})

const option34 = document.querySelector('#option34')
option34.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option34 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip34').style.opacity = 100
    option34Click++
  }
})

const option35 = document.querySelector('#option32')
option35.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option35 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip35').style.opacity = 100
    option35Click++
  }
})

const option36 = document.querySelector('#option36')
option36.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option36 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip36').style.opacity = 100
    option36Click++
  }
})

const option1st12 = document.querySelector('#option1st12')
option1st12.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option1st12 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip1st12').style.opacity = 100
    option1st12Click++
  }
})

const option2nd12 = document.querySelector('#option2nd12')
option2nd12.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option2nd12 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2nd12').style.opacity = 100
    option2nd12Click++
  }
})

const option3rd12 = document.querySelector('#option3rd12')
option3rd12.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option3rd12 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip3rd12').style.opacity = 100
    option3rd12Click++
  }
})

const option1to18 = document.querySelector('#option1to18')
option1to18.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option1to18 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip1To18').style.opacity = 100
    option1To18Click++
  }
})

const optionEven = document.querySelector('#optionEven')
optionEven.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionEven was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chipEven').style.opacity = 100
    optionEvenClick++
  }
})

const optionRed = document.querySelector('#optionRed')
optionRed.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option1to18 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chipRed').style.opacity = 100
    optionRedClick++
  }
})

const optionBlack = document.querySelector('#optionBlack')
optionBlack.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionBlack was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chipBlack').style.opacity = 100
    optionBlackClick++
  }
})

const optionOdd = document.querySelector('#optionOdd')
optionOdd.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionOdd was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chipOdd').style.opacity = 100
    optionOddClick++
  }
})

const option19to36 = document.querySelector('#option19to36')
option19to36.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("option19to36 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip19To36').style.opacity = 100
    option19To36Click++
  }
})

const optionTwoToOne1 = document.querySelector('#optionTwoToOne1')
optionTwoToOne1.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionTwoToOne1 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2To1One').style.opacity = 100
    option2To1OneClick++
  }
})

const optionTwoToOne2 = document.querySelector('#optionTwoToOne2')
optionTwoToOne2.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionTwoToOne2 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2To1Two').style.opacity = 100
    option2To1TwoClick++
  }
})

const optionTwoToOne3 = document.querySelector('#optionTwotoOne3')
optionTwoToOne3.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("optionTwoToOne3 was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2To1Three').style.opacity = 100
    option2To1ThreeClick++
  }
})

const optionOneOverTwo = document.querySelector('#oneOverTwo')
optionOneOverTwo.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("oneOverTwo was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip1Over2').style.opacity = 100
    option1Over2Click++
  }
})

const optionTwoOverThree = document.querySelector('#twoOverThree')
optionTwoOverThree.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twoOverThree was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2Over3').style.opacity = 100
    option2Over3Click++
  }
})

const optionFourOverFive = document.querySelector('#fourOverFive')
optionFourOverFive.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fourOverFive was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip4Over5').style.opacity = 100
    option4Over5Click++
  }
})

const optionFiveOverSix = document.querySelector('#fiveOverSix')
optionFiveOverSix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fiveOverSix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip5Over6').style.opacity = 100
    option5Over6Click++
  }
})

const optionSevenOverEight = document.querySelector('#sevenOverEight')
optionSevenOverEight.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("sevenOverEight was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip7Over8').style.opacity = 100
    option7Over8Click++
  }
})

const optionEightOverNine = document.querySelector('#eightOverNine')
optionEightOverNine.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("eightOverNine was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip8Over9').style.opacity = 100
    option8Over9Click++
  }
})

const optionTenOverEleven = document.querySelector('#tenOverEleven')
optionTenOverEleven.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("tenOverEleven was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip10Over11').style.opacity = 100
    option10Over11Click++
  }
})

const optionElevenOverTwelve = document.querySelector('#elevenOverTwelve')
optionElevenOverTwelve.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("elevenOverTwelve was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip11Over12').style.opacity = 100
    option11Over12Click++
  }
})

const optionThirteenOverFourteen = document.querySelector('#thirteenOverFourteen')
optionThirteenOverFourteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirteenOverFourteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip13Over14').style.opacity = 100
    option13Over14Click++
  }
})

const optionFourteenOverFifteen = document.querySelector('#fourteenOverFifteen')
optionFourteenOverFifteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fourteenOverFifteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip14Over15').style.opacity = 100
    option14Over15Click++
  }
})

const optionSixteenOverSeventeen = document.querySelector('#sixteenOverSeventeen')
optionSixteenOverSeventeen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("sixteenOverSeventeen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip16Over17').style.opacity = 100
    option16Over17Click++
  }
})

const optionSeventeenOverEighteen = document.querySelector('#seventeenOverEighteen')
optionSeventeenOverEighteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("seventeenOverEighteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip17Over18').style.opacity = 100
    option17Over18Click++
  }
})

const optionNineteenOverTwenty = document.querySelector('#nineteenOverTwenty')
optionNineteenOverTwenty.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("nineteenOverTwenty was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip19Over20').style.opacity = 100
    option19Over20Click++
  }
})

const optionTwentyOverTwentyOne = document.querySelector('#twentyOverTwentyOne')
optionTwentyOverTwentyOne.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyOverTwentyOne was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip20Over21').style.opacity = 100
    option20Over21Click++
  }
})

const optionTwentyTwoOverTwentyThree = document.querySelector('#twentyTwoOverTwentyThree')
optionTwentyTwoOverTwentyThree.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyTwoOverTwentyThree was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip22Over23').style.opacity = 100
    option22Over23Click++
  }
})

const optionTwentyThreeOverTwentyFour = document.querySelector('#twentyThreeOverTwentyFour')
optionTwentyThreeOverTwentyFour.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyThreeOverTwentyFour was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip23Over24').style.opacity = 100
    option23Over24Click++
  }
})

const optionTwentyFiveOverTwentySix = document.querySelector('#twentyFiveOverTwentySix')
optionTwentyFiveOverTwentySix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyFiveOverTwentySix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip25Over26').style.opacity = 100
    option25Over26Click++
  }
})

const optionTwentySixOverTwentySeven = document.querySelector('#twentySixOverTwentySeven')
optionTwentySixOverTwentySeven.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentySixOverTwentySeven was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip26Over27').style.opacity = 100
    option26Over27Click++
  }
})

const optionTwentyEightOverTwentyNine = document.querySelector('#twentyEightOverTwentyNine')
optionTwentyEightOverTwentyNine.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyEightOverTwentyNine was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip28Over29').style.opacity = 100
    option28Over29Click++
  }
})

const optionTwentyNineOverThirty = document.querySelector('#twentyNineOverThirty')
optionTwentyNineOverThirty.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyNineOverThirty was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip29Over30').style.opacity = 100
    option29Over30Click++
  }
})

const optionThirtyOneOverThirtyTwo = document.querySelector('#thirtyOneOverThirtyTwo')
optionThirtyOneOverThirtyTwo.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyOneOverThirtyTwo was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip31Over32').style.opacity = 100
    option31Over32Click++
  }
})

const optionThirtyTwoOverThirtyThree = document.querySelector('#thirtyTwoOverThirtyThree')
optionThirtyTwoOverThirtyThree.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyTwoOverThirtyThree was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip32Over33').style.opacity = 100
    option32Over33Click++
  }
})

const optionThirtyFourOverThirtyFive = document.querySelector('#thirtyFourOverThirtyFive')
optionThirtyFourOverThirtyFive.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyFourOverThirtyFive was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip34Over35').style.opacity = 100
    option34Over35Click++
  }
})

const optionThirtyFiveOverThirtySix = document.querySelector('#thirtyFiveOverThirtySix')
optionThirtyFiveOverThirtySix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyFiveOverThirtySix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip35Over36').style.opacity = 100
    option35Over36Click++
  }
})

const optionOneToFive = document.querySelector('#oneToFive')
optionOneToFive.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("oneToFive was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip1To5').style.opacity = 100
    option1to5Click++
  }
})

const optionTwoToSix = document.querySelector('#twoToSix')
optionTwoToSix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twoToSix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip2To6').style.opacity = 100
    option2to6Click++
  }
})

const optionFourToEight = document.querySelector('#fourToEight')
optionFourToEight.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fourToEight was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip4To8').style.opacity = 100
    option4to8Click++
  }
})

const optionFiveToNine = document.querySelector('#fiveToNine')
optionFiveToNine.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fiveToNine was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip5To9').style.opacity = 100
    option5to9Click++
  }
})

const optionSevenToEleven = document.querySelector('#sevenToEleven')
optionSevenToEleven.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("sevenToEleven was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip7To11').style.opacity = 100
    option7to11Click++
  }
})

const optionEightToTwelve = document.querySelector('#eightToTwelve')
optionEightToTwelve.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("eightToTwelve was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip8To12').style.opacity = 100
    option8to12Click++
  }
})

const optionTenToFourteen = document.querySelector('#tenToFourteen')
optionTenToFourteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("tenToFourteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip10To14').style.opacity = 100
    option10to14Click++
  }
})

const optionElevenToFifteen = document.querySelector('#elevenToFifteen')
optionElevenToFifteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("elevenToFifteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip11To15').style.opacity = 100
    option11to15Click++
  }
})

const optionThirteenToSeventeen = document.querySelector('#thirteenToSeventeen')
optionThirteenToSeventeen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirteenToSeventeen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip13To17').style.opacity = 100
    option13to17Click++
  }
})

const optionFourteenToEighteen = document.querySelector('#fourteenToEighteen')
optionFourteenToEighteen.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("fourteenToEighteen was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip14To18').style.opacity = 100
    option14to18Click++
  }
})

const optionSixteenToTwenty = document.querySelector('#sixteenToTwenty')
optionSixteenToTwenty.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("sixteenToTwenty was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip16To20').style.opacity = 100
    option16to20Click++
  }
})

const optionSeventeenToTwentyOne = document.querySelector('#seventeenToTwentyOne')
optionSeventeenToTwentyOne.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("seventeenToTwentyOne was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip17To21').style.opacity = 100
    option17to21Click++
  }
})

const optionNineteenToTwentyThree = document.querySelector('#nineteenToTwentyThree')
optionNineteenToTwentyThree.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("nineteenToTwentyThree was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip19To23').style.opacity = 100
    option19to23Click++
  }
})

const optionTwentyToTwentyFour = document.querySelector('#twentyToTwentyFour')
optionTwentyToTwentyFour.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyToTwentyFour was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip20To24').style.opacity = 100
    option20to24Click++
  }
})

const optionTwentyTwoToTwentySix = document.querySelector('#twentyTwoToTwentySix')
optionTwentyTwoToTwentySix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyTwoToTwentySix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip22To26').style.opacity = 100
    option22to26Click++
  }
})

const optionTwentyThreeToTwentySeven = document.querySelector('#twentyThreeToTwentySeven')
optionTwentyThreeToTwentySeven.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyThreeToTwentySeven was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip23To27').style.opacity = 100
    option23to27Click++
  }
})

const optionTwentyfiveToTwentyNine = document.querySelector('#twentyfiveToTwentyNine')
optionTwentyfiveToTwentyNine.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyfiveToTwentyNine was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip25To29').style.opacity = 100
    option25to29Click++
  }
})

const optionTwentySixToThirty = document.querySelector('#twentySixToThirty')
optionTwentySixToThirty.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentySixToThirty was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip26To30').style.opacity = 100
    option26to30Click++
  }
})

const optionTwentyEightToThirtyTwo = document.querySelector('#twentyEightToThirtyTwo')
optionTwentyEightToThirtyTwo.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyEightToThirtyTwo was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip28To32').style.opacity = 100
    option28to32Click++
  }
})

const optionTwentyNineToThirtyThree = document.querySelector('#twentyNineToThirtyThree')
optionTwentyNineToThirtyThree.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("twentyNineToThirtyThree was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip29To33').style.opacity = 100
    option29to33Click++
  }
})

const optionThirtyOneToThirtyFive = document.querySelector('#thirtyOneToThirtyFive')
optionThirtyOneToThirtyFive.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyOneToThirtyFive was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip31To35').style.opacity = 100
    option31to35Click++
  }
})

const optionThirtyTwoToThirtySix = document.querySelector('#thirtyTwoToThirtySix')
optionThirtyTwoToThirtySix.addEventListener('click', ()=>{
  if (wallet > 4) {
    console.log("thirtyTwoToThirtySix was clicked");
    totalBet += 5
    document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
    wallet -= 5
    document.querySelector('#balance').innerText = `Balance: $${wallet}`
    document.querySelector('#chip32To36').style.opacity = 100
    option32to36Click++
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
//
  let randomNumber = Math.floor(Math.random() * 37)
  alert(`LUCKY NUMBER: ${randomNumber}`);


    /////// straightBetButtons Winners /////////////
  if (randomNumber === 0) {
    option0WinningAmount += option0Click * 5 * 35
  } else {
    option0WinningAmount -= option0Click * 5
  }

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

  if (randomNumber === 3) {
    option3WinningAmount += option3Click * 5 * 35
  } else {
    option3WinningAmount -= option3Click * 5
  }

  if (randomNumber === 4) {
    option4WinningAmount += option4Click * 5 * 35
  } else {
    option4WinningAmount -= option4Click * 5
  }

  if (randomNumber === 5) {
    option5WinningAmount += option5Click * 5 * 35
  } else {
    option5WinningAmount -= option5Click * 5
  }

  if (randomNumber === 6) {
    option6WinningAmount += option6Click * 5 * 35
  } else {
    option6WinningAmount -= option6Click * 5
  }

  if (randomNumber === 7) {
    option7WinningAmount += option7Click * 5 * 35
  } else {
    option7WinningAmount -= option7Click * 5
  }

  if (randomNumber === 8) {
    option8WinningAmount += option8Click * 5 * 35
  } else {
    option8WinningAmount -= option8Click * 5
  }

  if (randomNumber === 9) {
    option9WinningAmount += option9Click * 5 * 35
  } else {
    option9WinningAmount -= option9Click * 5
  }

  if (randomNumber === 10) {
    option10WinningAmount += option10Click * 5 * 35
  } else {
    option10WinningAmount -= option10Click * 5
  }

  if (randomNumber === 11) {
    option11WinningAmount += option11Click * 5 * 35
  } else {
    option11WinningAmount -= option11Click * 5
  }

  if (randomNumber === 12) {
    option12WinningAmount += option12Click * 5 * 35
  } else {
    option12WinningAmount -= option12Click * 5
  }

  if (randomNumber === 13) {
    option13WinningAmount += option13Click * 5 * 35
  } else {
    option13WinningAmount -= option13Click * 5
  }

  if (randomNumber === 14) {
    option14WinningAmount += option14Click * 5 * 35
  } else {
    option14WinningAmount -= option14Click * 5
  }

  if (randomNumber === 15) {
    option15WinningAmount += option15Click * 5 * 35
  } else {
    option15WinningAmount -= option15Click * 5
  }

  if (randomNumber === 16) {
    option16WinningAmount += option16Click * 5 * 35
  } else {
    option16WinningAmount -= option16Click * 5
  }

  if (randomNumber === 17) {
    option17WinningAmount += option17Click * 5 * 35
  } else {
    option17WinningAmount -= option17Click * 5
  }

  if (randomNumber === 18) {
    option18WinningAmount += option18Click * 5 * 35
  } else {
    option18WinningAmount -= option18Click * 5
  }

  if (randomNumber === 19) {
    option19WinningAmount += option19Click * 5 * 35
  } else {
    option19WinningAmount -= option19Click * 5
  }

  if (randomNumber === 20) {
    option20WinningAmount += option20Click * 5 * 35
  } else {
    option20WinningAmount -= option20Click * 5
  }

  if (randomNumber === 21) {
    option21WinningAmount += option21Click * 5 * 35
  } else {
    option21WinningAmount -= option21Click * 5
  }

  if (randomNumber === 22) {
    option22WinningAmount += option22Click * 5 * 35
  } else {
    option22WinningAmount -= option22Click * 5
  }

  if (randomNumber === 23) {
    option23WinningAmount += option23Click * 5 * 35
  } else {
    option23WinningAmount -= option23Click * 5
  }

  if (randomNumber === 24) {
    option24WinningAmount += option24Click * 5 * 35
  } else {
    option24WinningAmount -= option24Click * 5
  }

  if (randomNumber === 25) {
    option25WinningAmount += option25Click * 5 * 35
  } else {
    option25WinningAmount -= option25Click * 5
  }

  if (randomNumber === 26) {
    option26WinningAmount += option26Click * 5 * 35
  } else {
    option26WinningAmount -= option26Click * 5
  }

  if (randomNumber === 27) {
    option27WinningAmount += option27Click * 5 * 35
  } else {
    option27WinningAmount -= option27Click * 5
  }

  if (randomNumber === 28) {
    option28WinningAmount += option28Click * 5 * 35
  } else {
    option28WinningAmount -= option28Click * 5
  }

  if (randomNumber === 29) {
    option29WinningAmount += option29Click * 5 * 35
  } else {
    option29WinningAmount -= option29Click * 5
  }

  if (randomNumber === 31) {
    option31WinningAmount += option31Click * 5 * 35
  } else {
    option31WinningAmount -= option31Click * 5
  }

  if (randomNumber === 32) {
    option32WinningAmount += option32Click * 5 * 35
  } else {
    option32WinningAmount -= option32Click * 5
  }

  if (randomNumber === 33) {
    option33WinningAmount += option33Click * 5 * 35
  } else {
    option33WinningAmount -= option33Click * 5
  }

  if (randomNumber === 34) {
    option34WinningAmount += option34Click * 5 * 35
  } else {
    option34WinningAmount -= option34Click * 5
  }

  if (randomNumber === 35) {
    option35WinningAmount += option35Click * 5 * 35
  } else {
    option35WinningAmount -= option35Click * 5
  }

  if (randomNumber === 36) {
    option36WinningAmount += option36Click * 5 * 35
  } else {
    option36WinningAmount -= option36Click * 5
  }


    /////// 2To1Button Winners ///////////
    // ONE
    if (randomNumber === 1) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 4) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 7) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 10) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 13) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 16) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 19) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 22) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 25) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 28) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 31) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    if (randomNumber === 34) {
      option2To1OneWinningAmount += option2To1OneClick * 5 * 35
    } else {
      option2To1OneWinningAmount -= option2To1OneClick * 5
    }

    // TWO
    if (randomNumber === 2) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 5) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 8) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 11) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 14) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 17) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 20) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 23) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 26) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 29) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 32) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    if (randomNumber === 35) {
      option2To1TwoWinningAmount += option2To1TwoClick * 5 * 35
    } else {
      option2To1TwoWinningAmount -= option2To1TwoClick * 5
    }

    //THREE
    if (randomNumber === 3) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 6) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 9) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 12) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 15) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 18) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 21) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 24) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 27) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 30) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 33) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }

    if (randomNumber === 36) {
      option2To1ThreeWinningAmount += option2To1ThreeClick * 5 * 35
    } else {
      option2To1ThreeWinningAmount -= option2To1ThreeClick * 5
    }


    /////1st12 - 3rd12 Buttons Winners /////////////
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6 || randomNumber === 7 || randomNumber === 8 || randomNumber === 9 || randomNumber === 10 || randomNumber === 11 || randomNumber === 12) {
      option1st12WinningAmount += option1st12Click * 5 * 35
    } else {
      option1st12WinningAmount -= option1st12Click * 5
    }

    if (randomNumber === 13 || randomNumber === 14 || randomNumber === 15 || randomNumber === 16 || randomNumber === 17 || randomNumber === 18 || randomNumber === 19 || randomNumber === 20 || randomNumber === 21 || randomNumber === 22 || randomNumber === 23 || randomNumber === 24) {
      option2nd12WinningAmount += option2nd12Click * 5 * 35
    } else {
      option2nd12WinningAmount -= option2nd12Click * 5
    }

    if (randomNumber === 25 || randomNumber === 26 || randomNumber === 27 || randomNumber === 28 || randomNumber === 29 || randomNumber === 30 || randomNumber === 31 || randomNumber === 32 || randomNumber === 33 || randomNumber === 34 || randomNumber === 35 || randomNumber === 36) {
      option3rd12WinningAmount += option3rd12Click * 5 * 35
    } else {
      option3rd12WinningAmount -= option3rd12Click * 5
    }
    ///////// ColorButton Winners /////////////
    //RED
    if (randomNumber === 2 || randomNumber === 4 || randomNumber === 6 || randomNumber === 8 || randomNumber === 10 || randomNumber === 12 || randomNumber === 14 || randomNumber === 16 || randomNumber === 18 || randomNumber === 20 || randomNumber === 22 || randomNumber === 24 || randomNumber === 26 || randomNumber === 28 || randomNumber === 30 || randomNumber === 32 || randomNumber === 34 || randomNumber === 36) {
      optionRedWinningAmount += optionRedClick * 5 * 35
    } else {
      optionRedWinningAmount -= optionRedClick * 5
    }

    //BLACK
    if (randomNumber === 1 || randomNumber === 3 || randomNumber === 5 || randomNumber === 7 || randomNumber === 9 || randomNumber === 11 || randomNumber === 13 || randomNumber === 15 || randomNumber === 17 || randomNumber === 19 || randomNumber === 21 || randomNumber === 23 || randomNumber === 25 || randomNumber === 27 || randomNumber === 29 || randomNumber === 31 || randomNumber === 33 || randomNumber === 35) {
      optionBlackWinningAmount += optionBlackClick * 5 * 35
    } else {
      optionBlackWinningAmount -= optionBlackClick * 5
    }


    ///////// Even/Odd Winners ///////////////
    //EVEN
    if (randomNumber === 0 || randomNumber === 2 || randomNumber === 4 || randomNumber === 6 || randomNumber === 8 || randomNumber === 10 || randomNumber === 12 || randomNumber === 14 || randomNumber === 16 || randomNumber === 18 || randomNumber === 20 || randomNumber === 22 || randomNumber === 24 || randomNumber === 26 || randomNumber === 28 || randomNumber === 30 || randomNumber === 32 || randomNumber === 34 || randomNumber === 36) {
      optionEvenWinningAmount += optionEvenClick * 5 * 35
    } else {
      optionEvenWinningAmount -= optionEvenClick * 5
    }

    //ODD
    if (randomNumber === 1 || randomNumber === 3 || randomNumber === 5 || randomNumber === 7 || randomNumber === 9 || randomNumber === 11 || randomNumber === 13 || randomNumber === 15 || randomNumber === 17 || randomNumber === 19 || randomNumber === 21 || randomNumber === 23 || randomNumber === 25 || randomNumber === 27 || randomNumber === 29 || randomNumber === 31 || randomNumber === 33 || randomNumber === 35) {
      optionOddWinningAmount += optionOddClick * 5 * 35
    } else {
      optionOddWinningAmount -= optionOddClick * 5
    }



    ////////// 1To18 & 19To36 Winners //////////////
    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6 || randomNumber === 7 || randomNumber === 8 || randomNumber === 9 || randomNumber === 10 || randomNumber === 11 || randomNumber === 12 || randomNumber === 13 || randomNumber === 14 || randomNumber === 15 || randomNumber === 16 || randomNumber === 17 || randomNumber === 18) {
      option1To18WinningAmount += option1To18Click * 5 * 35
    } else {
      option1To18WinningAmount -= option1To18Click * 5
    }

    if (randomNumber === 19 || randomNumber === 20 || randomNumber === 21 || randomNumber === 22 || randomNumber === 23 || randomNumber === 24 || randomNumber === 25 || randomNumber === 26 || randomNumber === 27 || randomNumber === 28 || randomNumber === 29 || randomNumber === 30 || randomNumber === 31 || randomNumber === 32 || randomNumber === 33 || randomNumber === 34 || randomNumber === 35 || randomNumber === 36) {
      option19To36WinningAmount += option19To36Click * 5 * 35
    } else {
      option19To36WinningAmount -= option19To36Click * 5
    }


    ///////// Middle/CornerButton Winners ///////////////

    if (randomNumber === 1 || randomNumber === 2 || randomNumber === 4|| randomNumber === 5) {
      option1to5WinningAmount += option1to5Click * 5 * 35
    } else {
      option1to5WinningAmount -= option1to5Click * 5
    }

    if (randomNumber === 2 || randomNumber === 3 || randomNumber === 5|| randomNumber === 6) {
      option2to6WinningAmount += option2to6Click * 5 * 35
    } else {
      option2to6WinningAmount -= option2to6Click * 5
    }

    if (randomNumber === 4 || randomNumber === 5 || randomNumber === 7|| randomNumber === 8) {
      option4to8WinningAmount += option4to8Click * 5 * 35
    } else {
      option4to8WinningAmount -= option4to8Click * 5
    }

    if (randomNumber === 5 || randomNumber === 6 || randomNumber === 8|| randomNumber === 9) {
      option5to9WinningAmount += option5to9Click * 5 * 35
    } else {
      option5to9WinningAmount -= option5to9Click * 5
    }

    if (randomNumber === 7 || randomNumber === 8 || randomNumber === 10|| randomNumber === 11) {
      option7to11WinningAmount += option7to11Click * 5 * 35
    } else {
      option7to11WinningAmount -= option7to11Click * 5
    }

    if (randomNumber === 8 || randomNumber === 9 || randomNumber === 11|| randomNumber === 12) {
      option8to12WinningAmount += option8to12Click * 5 * 35
    } else {
      option8to12WinningAmount -= option8to12Click * 5
    }

    if (randomNumber === 10 || randomNumber === 11 || randomNumber === 13|| randomNumber === 14) {
      option10to14WinningAmount += option10to14Click * 5 * 35
    } else {
      option10to14WinningAmount -= option10to14Click * 5
    }

    if (randomNumber === 11 || randomNumber === 12 || randomNumber === 14|| randomNumber === 15) {
      option11to15WinningAmount += option11to15Click * 5 * 35
    } else {
      option11to15WinningAmount -= option11to15Click * 5
    }

    if (randomNumber === 13 || randomNumber === 14 || randomNumber === 16|| randomNumber === 17) {
      option13to17WinningAmount += option13to17Click * 5 * 35
    } else {
      option13to17WinningAmount -= option13to17Click * 5
    }

    if (randomNumber === 14 || randomNumber === 15 || randomNumber === 17|| randomNumber === 18) {
      option14to18WinningAmount += option14to18Click * 5 * 35
    } else {
      option14to18WinningAmount -= option14to18Click * 5
    }

    if (randomNumber === 16 || randomNumber === 17 || randomNumber === 19|| randomNumber === 20) {
      option16to20WinningAmount += option16to20Click * 5 * 35
    } else {
      option16to20WinningAmount -= option16to20Click * 5
    }

    if (randomNumber === 17 || randomNumber === 18 || randomNumber === 20|| randomNumber === 21) {
      option17to21WinningAmount += option17to21Click * 5 * 35
    } else {
      option17to21WinningAmount -= option17to21Click * 5
    }

    if (randomNumber === 19 || randomNumber === 20 || randomNumber === 22|| randomNumber === 23) {
      option19to23WinningAmount += option19to23Click * 5 * 35
    } else {
      option19to23WinningAmount -= option19to23Click * 5
    }

    if (randomNumber === 20 || randomNumber === 21 || randomNumber === 23|| randomNumber === 24) {
      option20to24WinningAmount += option20to24Click* 5 * 35
    } else {
      option20to24WinningAmount -= option20to24Click * 5
    }

    if (randomNumber === 22 || randomNumber === 23 || randomNumber === 25|| randomNumber === 26) {
      option22to26WinningAmount += option22to26Click * 5 * 35
    } else {
      option22to26WinningAmount -= option22to26Click * 5
    }

    if (randomNumber === 23 || randomNumber === 24 || randomNumber === 26|| randomNumber === 27) {
      option23to27WinningAmount += option23to27Click * 5 * 35
    } else {
      option23to27WinningAmount -= option23to27Click * 5
    }

    if (randomNumber === 25 || randomNumber === 26 || randomNumber === 28|| randomNumber === 29) {
      option25to29WinningAmount += option25to29Click * 5 * 35
    } else {
      option25to29WinningAmount -= option25to29Click * 5
    }

    if (randomNumber === 26 || randomNumber === 27 || randomNumber === 29|| randomNumber === 30) {
      option26to30WinningAmount += option26to30Click * 5 * 35
    } else {
      option26to30WinningAmount -= option26to30Click * 5
    }

    if (randomNumber === 28 || randomNumber === 29 || randomNumber === 31|| randomNumber === 32) {
      option28to32WinningAmount += option28to32Click * 5 * 35
    } else {
      option28to32WinningAmount -= option28to32Click * 5
    }

    if (randomNumber === 29 || randomNumber === 30 || randomNumber === 32|| randomNumber === 33) {
      option29to33WinningAmount += option29to33Click * 5 * 35
    } else {
      option29to33WinningAmount -= option29to33Click * 5
    }

    if (randomNumber === 31 || randomNumber === 32 || randomNumber === 34|| randomNumber === 35) {
      option31to35WinningAmount += option31to35Click * 5 * 35
    } else {
      option31to35WinningAmount -= option31to35Click * 5
    }

    if (randomNumber === 32 || randomNumber === 33 || randomNumber === 35|| randomNumber === 36) {
      option32to36WinningAmount += option32to36Click * 5 * 35
    } else {
      option32to36WinningAmount -= option32to36Click * 5
    }


    //////////// RowBet Button Winners ////////////////
    if (randomNumber === 1 || randomNumber === 2) {
      option1Over2WinningAmount += option1Over2Click * 5 * 17
    } else {
      option1Over2WinningAmount -= option1Over2Click * 5
    }

    if (randomNumber === 2 || randomNumber === 3) {
      option2Over3WinningAmount += option2Over3Click * 5 * 17
    } else {
      option2Over3WinningAmount -= option2Over3Click * 5
    }

    if (randomNumber === 4 || randomNumber === 5) {
      option4Over5WinningAmount += option4Over5Click * 5 * 17
    } else {
      option4Over5WinningAmount -= option4Over5Click * 5
    }

    if (randomNumber === 5 || randomNumber === 6) {
      option5Over6WinningAmount += option5Over6Click * 5 * 17
    } else {
      option5Over6WinningAmount -= option5Over6Click * 5
    }

    if (randomNumber === 7 || randomNumber === 8) {
      option7Over8WinningAmount += option7Over8Click * 5 * 17
    } else {
      option7Over8WinningAmount -= option7Over8Click * 5
    }

    if (randomNumber === 8 || randomNumber === 9) {
      option8Over9WinningAmount += option8Over9Click * 5 * 17
    } else {
      option8Over9WinningAmount -= option8Over9Click * 5
    }

    if (randomNumber === 10 || randomNumber === 11) {
      option10Over11WinningAmount += option10Over11Click * 5 * 17
    } else {
      option10Over11WinningAmount -= option10Over11Click * 5
    }

    if (randomNumber === 11 || randomNumber === 12) {
      option11Over12WinningAmount += option11Over12Click * 5 * 17
    } else {
      option11Over12WinningAmount -= option11Over12Click * 5
    }

    if (randomNumber === 13 || randomNumber === 14) {
      option13Over14WinningAmount += option13Over14Click * 5 * 17
    } else {
      option13Over14WinningAmount -= option13Over14Click * 5
    }

    if (randomNumber === 14 || randomNumber === 15) {
      option14Over15WinningAmount += option14Over15Click * 5 * 17
    } else {
      option14Over15WinningAmount -= option14Over15Click * 5
    }

    if (randomNumber === 16 || randomNumber === 17) {
      option16ver17WinningAmount += option16Over17Click * 5 * 17
    } else {
      option16ver17WinningAmount -= option16Over17Click * 5
    }

    if (randomNumber === 17 || randomNumber === 18) {
      option17ver18WinningAmount += option17Over18Click * 5 * 17
    } else {
      option17ver18WinningAmount -= option17Over18Click * 5
    }

    if (randomNumber === 19 || randomNumber === 20) {
      option19Over20WinningAmount += option19Over20Click * 5 * 17
    } else {
      option19Over20WinningAmount-= option19Over20Click * 5
    }

    if (randomNumber === 20 || randomNumber === 21) {
      option20Over21WinningAmount += option20Over21Click * 5 * 17
    } else {
      option20Over21WinningAmount -= option20Over21Click * 5
    }

    if (randomNumber === 22 || randomNumber === 23) {
      option22Over23WinningAmount += option22Over23Click * 5 * 17
    } else {
      option22Over23WinningAmount -= option22Over23Click * 5
    }

    if (randomNumber === 23 || randomNumber === 24) {
      option23Over24WinningAmount += option23Over24Click * 5 * 17
    } else {
      option23Over24WinningAmount -= option23Over24Click * 5
    }

    if (randomNumber === 25 || randomNumber === 26) {
      option25Over26WinningAmount += option25Over26Click * 5 * 17
    } else {
      option25Over26WinningAmount -= option25Over26Click * 5
    }

    if (randomNumber === 26 || randomNumber === 27) {
      option26Over27WinningAmount += option26Over27Click * 5 * 17
    } else {
      option26Over27WinningAmount-= option26Over27Click * 5
    }

    if (randomNumber === 28 || randomNumber === 29) {
      option28Over29WinningAmount += option28Over29Click * 5 * 17
    } else {
      option28Over29WinningAmount -= option28Over29Click * 5
    }

    if (randomNumber === 29 || randomNumber === 30) {
      option29Over30WinningAmount += option29Over30Click * 5 * 17
    } else {
      option29Over30WinningAmount -= option29Over30Click * 5
    }

    if (randomNumber === 31 || randomNumber === 32) {
      option31Over32WinningAmount += option31Over32Click * 5 * 17
    } else {
      option31Over32WinningAmount -= option31Over32Click * 5
    }

    if (randomNumber === 32 || randomNumber === 33) {
      option32Over33WinningAmount += option32Over33Click * 5 * 17
    } else {
      option32Over33WinningAmount -= option32Over33Click * 5
    }

    if (randomNumber === 34 || randomNumber === 35) {
      option34Over35WinningAmount += option34Over35Click * 5 * 17
    } else {
      option34Over35WinningAmount -= option34Over35Click * 5
    }

    if (randomNumber === 35 || randomNumber === 36) {
      option35Over36WinningAmount += option35Over36Click * 5 * 17
    } else {
      option35Over36WinningAmount -= option35Over36Click * 5
    }






  let totalWinningAmount = 0
  totalWinningAmount += option0WinningAmount + option1WinningAmount + option2WinningAmount + option3WinningAmount + option4WinningAmount + option5WinningAmount + option6WinningAmount + option7WinningAmount + option8WinningAmount + option9WinningAmount + option10WinningAmount + option11WinningAmount + option12WinningAmount + option13WinningAmount + option14WinningAmount + option15WinningAmount + option16WinningAmount + option17WinningAmount + option18WinningAmount + option19WinningAmount
  + option20WinningAmount
  + option21WinningAmount
  + option22WinningAmount
  + option23WinningAmount
  + option24WinningAmount
  + option25WinningAmount
  + option26WinningAmount
  + option27WinningAmount
  + option28WinningAmount
  + option29WinningAmount
  + option30WinningAmount
  + option31WinningAmount
  + option32WinningAmount
  + option33WinningAmount
  + option34WinningAmount
  + option35WinningAmount
  + option36WinningAmount
  + option1Over2WinningAmount
  + option2Over3WinningAmount
  + option4Over5WinningAmount
  + option5Over6WinningAmount
  + option7Over8WinningAmount
  + option8Over9WinningAmount
  + option10Over11WinningAmount
  + option11Over12WinningAmount
  + option13Over14WinningAmount
  + option14Over15WinningAmount
  + option16ver17WinningAmount
  + option17ver18WinningAmount
  + option19Over20WinningAmount
  + option20Over21WinningAmount
  + option22Over23WinningAmount
  + option23Over24WinningAmount
  + option25Over26WinningAmount
  + option26Over27WinningAmount
  + option28Over29WinningAmount
  + option29Over30WinningAmount
  + option31Over32WinningAmount
  + option32Over33WinningAmount
  + option34Over35WinningAmount
  + option35Over36WinningAmount
  + option2To1OneWinningAmount
  + option2To1TwoWinningAmount
  + option2To1ThreeWinningAmount
  + option1st12WinningAmount
  + option2nd12WinningAmount
  + option3rd12WinningAmount
  + option1To18WinningAmount
  + optionEvenWinningAmount
  + optionRedWinningAmount
  + optionBlackWinningAmount
  + optionOddWinningAmount
  + option19To36WinningAmount
  + option1to5WinningAmount
  + option2to6WinningAmount
  + option4to8WinningAmount
  + option5to9WinningAmount
  + option7to11WinningAmount
  + option8to12WinningAmount
  + option10to14WinningAmount
  + option11to15WinningAmount
  + option13to17WinningAmount
  + option14to18WinningAmount
  + option16to20WinningAmount
  + option17to21WinningAmount
  + option19to23WinningAmount
  + option20to24WinningAmount
  + option22to26WinningAmount
  + option23to27WinningAmount
  + option25to29WinningAmount
  + option26to30WinningAmount
  + option28to32WinningAmount
  + option29to33WinningAmount
  + option31to35WinningAmount
  + option32to36WinningAmount



  document.querySelector('#winningAmount').innerText = `Winning Amount: $${totalWinningAmount}`
  if (wallet < 5) {
    document.querySelector('#spinButton').disabled = true
    alert(`MINIMUM BET AMOUNT IS $5! You have gambled away your money..`)
  }

  wallet = wallet + totalWinningAmount
  document.querySelector('#balance').innerText = `Balance: $${wallet}`
})



const cashOutButton = document.querySelector('#cashOutButton')
cashOutButton.addEventListener('click', ()=>{
  wallet = wallet + totalBet
  document.querySelector('#balance').innerText = `Balance: $${wallet}`
  totalBet = 0
  document.querySelector('#totalBet').innerText = `Total Bet: $${totalBet}`
  alert(`YOU CASHED OUT $${wallet}!`)
  wallet = 0
  document.querySelector('#balance').innerText = `Balance: $${wallet}`
  document.querySelector('.allChips').style.opacity = 0;
})
