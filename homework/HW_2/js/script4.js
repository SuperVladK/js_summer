"use strict"

let santimeterLength = parseInt(prompt('Введіть довжину у сантиметрах'))
const santimeterInMeter = 1 / 100
const santimeterInKilometer = santimeterInMeter / 1000
const lengthInMeter = santimeterLength * santimeterInMeter
const lengthInKilometer = santimeterLength * santimeterInKilometer
document.write(`${santimeterLength} см = ${lengthInMeter.toFixed(2)} м або ${lengthInKilometer.toFixed(5)} км`)