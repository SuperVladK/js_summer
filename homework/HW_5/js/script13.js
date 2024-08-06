"use strict"

let minUserNum = parseInt(prompt('Введіть перше число.'))
let maxUserNum = parseInt(prompt('Введіть друге число.'))
let randomNum
let sum = 0
for (let i = minUserNum; i <= maxUserNum; i++) {
      randomNum = minUserNum + Math.floor(Math.random() * (maxUserNum - minUserNum + 1))
      document.write(`${randomNum}<br>`)
      randomNum++
      document.write(`${randomNum}<br>`)
      if (randomNum% 2 !== 0)
            sum += randomNum
      document.write(`${sum}`)
}
      document.write(`Сума пʼяти непарних чисел серед заданих = ${sum}`)
