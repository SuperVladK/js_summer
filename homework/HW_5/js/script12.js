"use strict"

let minUserNum = parseInt(prompt('Введіть перше число.'))
let maxUserNum = parseInt(prompt('Введіть друге число.'))
let sum = 0
for (let i = minUserNum; i < maxUserNum; i++) {
      console.log(i)
      if (i % 2 !== 0)
      sum+= i
}
      document.write(`Сума непарних чисел серед заданих = ${sum}`)
