"use strict"

let minMothNum = 1
let maxMonthNum = 12
let minDayNum = 0
let maxDayNum = 6
let randomMonth = Math.floor(Math.random() * (maxMonthNum - minMothNum + 1)) + minMothNum
let randomDay = Math.floor(Math.random() * (maxDayNum - minDayNum + 1)) + minDayNum
const dayMonthSum = randomMonth + randomDay
document.write(`Випадковий номер місяця - ${randomMonth} <br>
               Випадковий номер дня - ${randomDay} <br>
               Сума випадкових номерів - ${dayMonthSum}
`)