"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNamesCount = (parseInt(prompt('Введіть кількість імен.')))
   function getNamesArray(newArrayNamesCount) {
      let nameArray = []
      for (let i = 1; i <= newArrayNamesCount; i++) {
         let name = prompt(`Введіть імʼя №${i}`)
         nameArray.push(name)
      }
      return nameArray
   }
   let namesArray = getNamesArray(newArrayNamesCount)

   function getFirstLetterNamesArray(namesArray) {
      let firstLetterArray = namesArray.map(element => element.charAt(0))
      return firstLetterArray
   } 
   let firstLetterNameArray = getFirstLetterNamesArray(namesArray)
   document.write(`[${namesArray}]<br>[${firstLetterNameArray}]`)
}

