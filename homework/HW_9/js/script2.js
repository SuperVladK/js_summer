"use strict"

  if (confirm('Почати тестування?')) {
   let elementsCount = parseInt(prompt('Введіть кількість елементів.'))
   function getZeroArray(elementsCount) {
      let newArray = new Array(elementsCount)
      let halfOfArray = Math.floor(elementsCount / 2)
      newArray.fill(1, 0, halfOfArray)
      newArray.fill(7, halfOfArray)
      return newArray
   }
   let zeroArray = getZeroArray(elementsCount)
   document.write(`[${zeroArray}]`)
}
 

