"use strict"

if (confirm('Почати тестування?')) {
 let pricesCount = parseInt(prompt('Введіть кількість цін на цінні папери'))
 let pricesArr = []
 for (let i = 1; i <= pricesCount; i++) {
    let price = 1 + Math.floor(Math.random() * 10000 - 1)
       pricesArr.push(price)
   }
   let priceChangeNum = pricesArr.reduce((prevMean, el, index, array) => index > 0 ? index++ : prevMean)
   document.write(priceChangeNum)
}
 

