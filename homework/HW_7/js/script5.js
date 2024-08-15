"use strict"

function getThreeMean(num1, num2, num3) {
   if (num1 % 2 === 0) oddNum++
   if (num2 % 2 === 0) oddNum++
   if (num3 % 2 === 0) oddNum++
   if (num1 > 0) addNum++
   if (num2 > 0) addNum++
   if (num3 > 0) addNum++
   if (num1 > 100) moreThanHundredNum++
   if (num2 > 100) moreThanHundredNum++
   if (num3 > 100) moreThanHundredNum++
   return (`Серед Ваших чисел ${oddNum} парних, ${addNum} додатних та ${moreThanHundredNum} більших за 100 чисел.`)
}
let oddNum = 0
let addNum = 0
let moreThanHundredNum = 0
let num1 = parseInt(prompt('Введіть перше число'))
let num2 = parseInt(prompt('Введіть друге число'))
let num3 = parseInt(prompt('Введіть третє число'))
document.write(`${getThreeMean(num1,num2,num3)}`)
