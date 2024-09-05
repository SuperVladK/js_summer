"use strict"

if (confirm('Почати тестування?')) {
   function getArr(pricesCount) {
      let pricesArr = []
      for (let i = 1; i <= pricesCount; i++) {
         let price = 1 + Math.floor(Math.random() * 10000 - 1)
         pricesArr.push(price)
      }
      return pricesArr
   }
   let pricesCount = parseInt(prompt('Введіть кількість цін на цінні папери'))
   let basicArr = getArr(pricesCount)
   let firstMoreThanThousandPrice = basicArr.findLast((el) => el > 1000)
   document.write(firstMoreThanThousandPrice)
}
 