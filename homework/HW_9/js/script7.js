"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNumCount = (parseInt(prompt('Введіть кількість цін в масиві.')))
   let newArrayMInNumRange = parseInt(prompt('Введіть мінімальну значення ціни.'))
   let newArrayMaxNumRange = parseInt(prompt('Введіть максимальне значення ціни (не менше 2000).','2000'))
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

   function getDiscountArray(priceArray) {
      let discountArr = priceArray.map(element => element > 1000 ? Math.floor(element * 0.7) : element)
      return discountArr
   }
   let discountArray = getDiscountArray(priceArray)
   document.write(`oldarray - [${priceArray}]<br>newarray - [${discountArray}]  `)
}
 

