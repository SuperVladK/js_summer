"use strict"

let userNum = parseInt(prompt('Загадайте довільне  число від 1 до 9, а я спробую його вгадати.'))
let computerNum
do {
      computerNum = 1 + Math.floor(Math.random() * 9)
   confirm(`Спробую вгадати, що Ви загадали. Число ${computerNum} Ваше?`)
   if (computerNum === userNum) 
      break
      alert(`Нажаль ${computerNum} не Ваше число. Спробую ще!`)
} while (userNum !== computerNum)
alert(`Ура! В мене вийшло! Ви загадали ${userNum}!!!`)
   
