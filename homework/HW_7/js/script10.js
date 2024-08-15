"use strict"
   
function belowZeroTempQnt(tempDataNum) {
   let belowZeroNum = 0
   for (let i = 1; i <= tempDataNum; i++) {
      let addNum = parseFloat(prompt('Введіть додатній або від\ʼємний показник температури'))
      if (addNum<0) belowZeroNum++
   }
   return belowZeroNum
}
let tempDataNum = parseInt(prompt('Скільки показів теператури треба ввести?'))
document.write(`Серед введених вами показників температури ${belowZeroTempQnt(tempDataNum)} відʼємних значень.`)