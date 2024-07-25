"use strict"

let birthYear = parseFloat(prompt('Введіть рік Вашого народження'))
let currentYear = parseFloat(prompt('Введіть поточний рік'))
const ammountOfYears = currentYear - birthYear
document.write(`Ваш вік на сьогоднійшній день складає ${ammountOfYears} повних років`)