"use strict"

let dayNum = parseInt(prompt('Введіть номер дня тижня','1-7'))
function getDayMeaning(dayNum) {
   let result
   switch (dayNum) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5: result = 'робочий'
         break
      case 6:
      case 7: result = 'вихідний'
         break
   }
   return result
}
document.write(`Ваш день - ${getDayMeaning(dayNum)}`)