"use strict"

function getSumResult(num1,num2,num3,num4) {
   return (num1 + num2 + num3 + num4)
}

function getMultiplyResult(num1,num2,num3,num4) {
   return (num1 * num2 * num3 * num4)
}

function getAvarageResult(num1,num2,num3,num4) {
   return (num1 * num2 * num3 * num4 / 4)
}

function getMinNum(num1,num2,num3,num4) {
   let result = Math.min(num1,num2,num3,num4)
   return result
}

let num1 = parseInt(prompt('Введіть перше число'))
let num2 = parseInt(prompt('Введіть друге число'))
let num3 = parseInt(prompt('Введіть третє число'))
let num4 = parseInt(prompt('Введіть четверте число'))
document.write(`Сума Ваших чисел - ${getSumResult(num1,num2,num3,num4)}<br>Добуток Ваших чисел - ${getMultiplyResult(num1,num2,num3,num4)}<br>Середнє арифметичне серед Ваших чисел - ${getAvarageResult(num1,num2,num3,num4)}<br>Мінімальне з Ваших чисел - ${getMinNum(num1,num2,num3,num4)}`)
