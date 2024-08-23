"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNumCount = parseInt(prompt('Введіть кількість елементів в масиві.'))
   function getNewArray(newArrayNumCount) {
      let newArr = []
      for (let i = 1; i <= newArrayNumCount; i++){
         let newArrayNum = parseInt(prompt(`Введіть довільне відʼємне або додатнє число ${i}.`))
         newArr.push(newArrayNum)
      }
      return newArr
   }
   let newArray = getNewArray(newArrayNumCount)
   function getMultyResult(newArray){
      let result = 1
      for (let element of newArray) {
         if (element > 0) result*=element
      }
      return result

   }
   let multyResult = getMultyResult(newArray)
      document.write(`${multyResult}`)
}
 

