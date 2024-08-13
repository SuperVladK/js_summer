"use strict"

let userNum
let sum = 0
do {
   userNum = parseInt(prompt('Вводіть цілі числа, поки це буде можливо.' , '0-9'))
   sum += userNum
} while (userNum !== 0) 
   document.write(`Сума введених чисел дорівнює ${sum}`)