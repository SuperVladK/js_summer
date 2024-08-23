"use strict"

if (confirm('Почати тестування?')) {
   let newArrayCarCount = (parseInt(prompt('Введіть кількість авто.')))
   function getCarNumArray(newArrayCarCount) {
      let numArray = []
      for (let i = 1; i <= newArrayCarCount; i++) {
         let carNum = prompt(`Введіть номер авто ${i}.`)
         numArray.push(carNum)
      }
      return numArray
   }
   let carNumArray = getCarNumArray(newArrayCarCount)

   function getFirstACarArray(carNumArray) {
      let firstAArray = []
      carNumArray.forEach(element => { if (element.charAt(0) === 'A') firstAArray.push(element)})
      return firstAArray
   }
   let firstACarArray = getFirstACarArray(carNumArray)
   document.write(`[${carNumArray}]<br>[${firstACarArray}]`)
}
 

