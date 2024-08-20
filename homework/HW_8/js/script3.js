"use strict"

if (confirm('Почати тестування')) {
   let pupilNamesList = []
   let pupilNamesListQnt = parseInt(prompt('Скільки треба ввести імен учнів?'))
   for (let i = 1; i <= pupilNamesListQnt; i++) {
      let pupilName = prompt(`Введіть імʼя ${i} учня`)
      pupilNamesList.push(pupilName)
   }
   let nameIvanQnt = 0
   for (let a = 0; a < pupilNamesList.length; a++) {
      if (pupilNamesList[a] === 'Ivan') nameIvanQnt++
   }
   document.write(`В класі ${nameIvanQnt} Іванів.`)
}