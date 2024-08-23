"use strict"

if (confirm('Почати тестування?')) {
  let elementsCount = parseInt(prompt('Введіть кількість елементів.'))
   function getZeroArray(elementsCount) {
      let newArray = new Array(elementsCount)
      newArray.fill(1, 0, 5)
      newArray.fill(7, 5)
      return newArray
   }
   let zeroArray = getZeroArray(elementsCount)
   document.write(`[${zeroArray}]`)
}
 
