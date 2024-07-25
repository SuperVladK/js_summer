"use strict"

let birthYear = parseInt(prompt('Введіть рік Вашого народження'))
let currentYear = parseInt(prompt('Введіть поточний рік'))
const ammountOfYears = currentYear - birthYear
document.write(`Ваш вік на сьогоднійшній день складає ${ammountOfYears} повних років`)