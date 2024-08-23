"use strict"

if (confirm('Почати тестування?')) {
   let elementsCount = parseInt(prompt('Введіть кількість елементів.'))
   function getZeroArray(elementsCount) {
      let newArray = new Array(elementsCount).fill(0)
      return newArray
   }
   let zeroArray = getZeroArray(elementsCount)
   document.write(`[${zeroArray}]`)
}

 
 

