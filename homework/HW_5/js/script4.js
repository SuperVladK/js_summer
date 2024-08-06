"use strict"

let userNum = parseInt(prompt('Введіть кількість випадкових чисел, які треба вивести на екран.'))
document.write(`<ul>`)
for (let i = 1; i <= userNum; i++) {
   let randomNum = 1 + Math.floor(Math.random() * 100)
   document.write(`<li> ${randomNum} </li>`)
}
document.write(`</ul>`)