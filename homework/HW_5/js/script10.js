"use strict"

let userNum = parseInt(prompt('Загадайте довільне  число від 1 до 9, а я спробую його вгадати за 3 спроби.'))
for (let i = 1; i <= 3; i++) {
   let computerNum = 1 + Math.floor(Math.random() * 9)
   console.log(computerNum)
   confirm (`Я загадав число ${computerNum}. Це Ваше число?`)
   if (userNum !== computerNum) {
      alert('Прикро, спробую ще.')
      computerNum = 1 + Math.floor(Math.random() * 9)
   }
   else {
      alert(`Чудово! Я вгадав число ${userNum}, яке Ви загадали.`)
      break
   }
}
alert('Нажаль я не вгадав, може спробувати ще?')
   
