"use strict"

if (confirm('Почати тестування?')) {
 let pricesCount = parseInt(prompt('Введіть кількість цін на цінні папери'))
 let pricesArr = []
 for (let i = 1; i <= pricesCount; i++) {
    let price = 1 + Math.floor(Math.random() * 10000 - 1)
       pricesArr.push(price)
   }
   let maxNum = Math.max(...pricesArr)
   let newArr = pricesArr.map((el) => el = Math.floor(el * 100 / maxNum))
   document.write(newArr)
}
 