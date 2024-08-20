"use strict"

if (confirm('Почати тестування')) {
   let marksNum = parseInt(prompt('Введіть кількість відміток'))
   function getMarksArray(marksNum) {
      let marksArray = []
      for (let i = 1; i <= marksNum; i++) {
         let pupilMark = parseInt(prompt(`Введіть відмітку №${i}`, '1-5'))
         if (pupilMark <= 5)
            marksArray.push(pupilMark)
         else alert('Ви ввели некоректне значення.') 
      }
      return marksArray
   }
   let marksList = getMarksArray(marksNum)
   document.write(`Відмітки учня: ${marksList}<br>`)

   function getBadMarksNum(marksList) {
      let badMarksNum = 0
      for (let i = 0; i < marksList.length; i++){
         if(marksList[i] < 3) badMarksNum++
      }
      return badMarksNum
   }
   let totalBadMarks = getBadMarksNum(marksList)
   document.write(`У учня ${totalBadMarks} двійок.<br>`)

   function getGoodMarksNum(marksList) {
      let goodMarksNum = 0
      for (let i = 0; i < marksList.length; i++) {
         if (marksList[i] >= 4) goodMarksNum++
      }
      return goodMarksNum
   }
   let totalGoodMarks = getGoodMarksNum(marksList)
   document.write(`У учня ${totalGoodMarks} добрих відміток.<br>`)

   function getSatisfactoryMarksNum(marksList) {
      let satisfactoryMarksNum = 0
      for (let i = 0; i < marksList.length; i++) {
         if (marksList[i] === 3) satisfactoryMarksNum++
      }
      return satisfactoryMarksNum
   }
   let totalSatisfactoryMarks = getSatisfactoryMarksNum(marksList)
   document.write(`У учня ${totalSatisfactoryMarks}  відміток нижче середнього.<br>`)
}