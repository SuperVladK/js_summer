"use strict"

let secondNum = parseInt(prompt('Введіть кількіть секунд'))
const secondInMinute = 1 / 60
const secondInHour = secondInMinute / 60
const minutePassed = secondNum * secondInMinute
const hourPassed = secondNum * secondInHour
document.write(`З початку доби пройшло ${secondNum} секунд, що складає ${minutePassed.toFixed(2)} хвилин або ${hourPassed.toFixed(4)} годин.`)