"use strict"

const minNum = 0
const maxNum = 5
let randomNum = minNum + Math.floor(Math.random() * (maxNum - minNum) + 1)
let yourNum = parseInt(prompt('Введіть довільне число від 1 до 5'))
if (yourNum === randomNum) 
   document.write('Так, Ви вгадали з першого разу!')
   else 
   alert('Спробуйте ще разочок.')
   let yourSecondNum = parseInt(prompt('Введіть довільне число від 1 до 5'))
   if (yourSecondNum === randomNum)
    document.write('Супер! У вас вийшло вгадати з другої спроби!')
   else 
   document.write(`Нажаль Ви не вгадали! Випадкове число ${randomNum}. Спробуйте ще!`)
 