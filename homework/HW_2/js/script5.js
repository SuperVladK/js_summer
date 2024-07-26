"use strict"

let secondNum = parseInt(prompt('Введіть кількіть секунд'))
const Minute = 60
const Hour = 3600
const secondsPast = secondNum % Minute
const minutePassed = Math.floor(secondNum % Hour / Minute)
const hourPassed = Math.floor(secondNum / Hour)
document.write(`З початку доби пройшло ${secondNum} секунд, що складає ${hourPassed} годин, ${minutePassed} хвилин та ${secondsPast} с.`)