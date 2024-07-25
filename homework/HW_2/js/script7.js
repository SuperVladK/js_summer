"use strict"

let minMothNum = 1
let maxMonthNum = 12
let minDayNum = 0
let maxDayNum = 6
let randomMonth = minMothNum + Math.floor(Math.random() * (maxMonthNum - minMothNum + 1)) 
let randomDay = minDayNum + Math.floor(Math.random() * (maxDayNum - minDayNum + 1)) 
const dayMonthSum = randomMonth + randomDay
document.write(`Випадковий номер місяця - ${randomMonth} <br>
               Випадковий номер дня - ${randomDay} <br>
               Сума випадкових номерів - ${dayMonthSum}
`)