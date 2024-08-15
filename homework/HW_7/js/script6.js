"use strict"

function getInchFromSantimeter (santimeterQnt) {
   return santimeterQnt / 2.54
}
function getPoundFromKilogram (kilogramQnt) {
   return 0.45 * kilogramQnt
}
function getMileFromKilometer (kilometerQnt) {
   return 0.6214 * kilometerQnt
}
let santimeterQnt = parseInt(prompt('Введіть кількість сантиметрів.'))
let kilogramQnt = parseInt(prompt('Введіть кількість кілограмів.'))
let kilometerQnt = parseInt(prompt('Введіть кількість кілометрів.'))
document.write(`${santimeterQnt} сантиметрів становить ${getInchFromSantimeter(santimeterQnt).toFixed(2)} дюймів, <br> ${kilogramQnt} кілограмів становить ${getPoundFromKilogram(kilogramQnt).toFixed(2)} фунтів, <br> ${kilometerQnt} кілометрів становить ${getMileFromKilometer(kilometerQnt).toFixed(2)} милі.`)
