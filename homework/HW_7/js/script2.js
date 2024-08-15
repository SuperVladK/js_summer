"use strict"

function getMonth() {
   let monthName
   let monthNum = parseInt(prompt('Введіть номер місяця','1-12'))
   switch (monthNum) {
      case 1: monthName = 'січень'
         break
      case 2: monthName = 'лютий'
         break
      case 3: monthName = 'березень'
         break
      case 4: monthName = 'квітень'
         break
      case 5: monthName = 'травень'
         break
      case 6: monthName = 'червень'
         break
      case 7: monthName = 'липень'
         break
      case 8: monthName = 'серпень'
         break
      case 9: monthName = 'вересень'
         break
      case 10: monthName = 'жовтень'
         break
      case 11: monthName = 'листопад'
         break
      case 12: monthName = 'грудень'
         break
   }
   return monthName
}
document.write(`Ваш місяць - ${getMonth}`)