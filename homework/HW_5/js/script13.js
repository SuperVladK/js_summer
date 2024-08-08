"use strict"

let minUserNum = parseInt(prompt('Введіть перше число.'))
let maxUserNum = parseInt(prompt('Введіть друге число.'))
let sum = 0
let oddNum = 0
for (let i = minUserNum; i <= maxUserNum; i++) {
      let randomNum = minUserNum + Math.floor(Math.random() * (maxUserNum - minUserNum + 1))
      if (randomNum % 2 !== 0) { 
            sum += randomNum
            console.log(sum, randomNum)
            oddNum++
      }
      if (oddNum===5) break
}
      document.write(`Сума пʼяти непарних чисел серед заданих = ${sum}`)
