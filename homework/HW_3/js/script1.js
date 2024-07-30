"use strict"

let firstChildName = prompt('Введіть імʼя першої дитини')
let firstChildCandies = parseInt(prompt('Скільки у першої дитини цукерок'))
let secondChildName = prompt('Введіть імʼя другої дитини')
let secondChildCandies = parseInt(prompt('Скільки у другої дитини цукерок'))
if (firstChildCandies > secondChildCandies)
   document.write(`У ${firstChildName} цукерок більше, ніж у ${secondChildName}.`)
else if (firstChildCandies < secondChildCandies)
   document.write(`У ${secondChildName} цукерок більше, ніж у ${firstChildName}.`)
else 
   document.write(`У дітей цукерок порівну.`)