"use strict"
   
function aboveZeroAvarageTemp(tempDataNum) {
   let aboveZeroNum = 0
   let aboveZeroQnt = 0
   for (let i = 1; i <= tempDataNum; i++) {
      let addNum = parseFloat(prompt('Введіть додатний або від\ʼємний показник температури'))
      if (addNum > 0) {
         aboveZeroNum += addNum
         aboveZeroQnt++
      }
   }
   let avarageTemp = aboveZeroNum / aboveZeroQnt
   return avarageTemp.toFixed(1)
}
let tempDataNum = parseInt(prompt('Скільки показів теператури треба ввести?'))
document.write(`Середнє значення серед додатних показів, які Ви ввели становить ${aboveZeroAvarageTemp(tempDataNum)}.`)