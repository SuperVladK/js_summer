"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNumCount = (parseInt(prompt('Введіть кількість цін в масиві.')))
   let newArrayMInNumRange = parseInt(prompt('Введіть мінімальнe значення ціни.'))
   let newArrayMaxNumRange = parseInt(prompt('Введіть максимальне значення ціни.'))
   function getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange) {
      let priceArr = []
      for (let i = 1; i <= newArrayNumCount; i++) {
         let newArrayRundomNum = newArrayMInNumRange + Math.floor(Math.random() * (newArrayMaxNumRange - newArrayMInNumRange + 1))
         let arrElement = newArrayRundomNum
         priceArr.push(arrElement)
      }
      return priceArr
   }
   let priceArray = getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange)

   function getTaxArray(priceArray) {
      let taxArr = priceArray.map(element => (element * 0.2).toFixed(2))
      return taxArr
   }
   let taxArray = getTaxArray(priceArray)
   document.write(`prices - [${priceArray}]<br>taxes - [${taxArray}]  `)
}
 