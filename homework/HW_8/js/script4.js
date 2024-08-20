"use strict"

if (confirm('Почати тестування')) {
   let carQnt = parseInt(prompt('Введіть кількість автомобілів.'))
   let carNumArray = []
   for (let i = 1; i <= carQnt; i++){
      let carNum = prompt('Введіть реєстраційний номер машини.')
      carNumArray.push(carNum)
   }
   let firstACarNum = 0
   let firstA = 'A'
   for (let a = 0; a < carNumArray.length; a++){
      if (carNumArray[a].charAt(0) === firstA) firstACarNum++
   }
   let initialAndLastLetterCarNum = 0
   for (let b = 0; b < carNumArray.length; b++){
      if (carNumArray[b].charAt(0) === carNumArray[b].charAt(carNumArray[b].length - 1))
         initialAndLastLetterCarNum++
   }
   let moreThanFiveSymbolsCarNum = 0
   for (let c = 0; c < carNumArray.length; c++){
      if (carNumArray[c].length > 5) moreThanFiveSymbolsCarNum++
   }
   document.write(`Всього ${carQnt} машин з номерами: ${carNumArray}<br> ${firstACarNum} з яких починаються на А<br> ${initialAndLastLetterCarNum} з яких мають однакові перші та останні літери<br> ${moreThanFiveSymbolsCarNum} з яких мають більше пʼяти символів.`)
}