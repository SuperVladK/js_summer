"use strict"

let numMonth = parseInt(prompt('Введіть номер місяця','1-12'))
function getSeason(numMonth) {
   let season
   switch (numMonth) {
      case 3:
      case 4:
      case 5: season = 'весна'
         break
      case 6:
      case 7:
      case 8: season = 'літо'
         break
      case 9:
      case 10:
      case 11: season = 'осінь'
         break
      case 1:
      case 2:
      case 12: season = 'зима'
   }
   return season
}
document.write(`Ваш місяць це ${getSeason(numMonth)}`)