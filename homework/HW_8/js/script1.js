"use strict"

if (confirm('Почати тестування?')) {
   function getMarksArray(subjectsNum) {
      let marksArray = []
      for (let i = 1; i <= subjectsNum; i++) {
         let subjectsMark = parseInt(prompt(`Введіть відмітку ${i} предмету.`))
         marksArray.push(subjectsMark)
      }
      return marksArray
   }
   function getAvarageMark(marksList) {
      let totalMark = 0
      for (let a = 0; a < marksList.length; a++) {
         totalMark += marksList[a]
      }
      let avarageMark = totalMark / marksList.length
      return avarageMark
   }
   function getPupilStatus(marksList) {
      let minMark = 5
      let pupilStatus
      for (let mark = 0; mark < marksList.length; mark++){
         if (marksList[mark] < minMark) minMark = marksList[mark]
      }
      switch (minMark) {
         case 2: pupilStatus = 'двійочник'
            break
         case 3: pupilStatus = 'трійочник'
            break
         case 4: pupilStatus = 'хорошист'
            break
         case 5: pupilStatus = 'відмінник'
      }
      return pupilStatus
   }
   let subjectsNum = parseInt(prompt('Введіть кількість предметів'))
   let marksList = getMarksArray(subjectsNum)
   document.write(`Відмітки: ${marksList}<br>`)
   let avarageSubjectsMark = getAvarageMark(marksList)
   document.write(`Середня відмітка: ${avarageSubjectsMark.toFixed(1)}<br>`)
   let pupil = getPupilStatus(marksList)
   document.write(`Учень - ${pupil}`)
}
 

