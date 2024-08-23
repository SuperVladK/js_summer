"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNumCount = (parseInt(prompt('Введіть кількість елементів в масиві.')))
   let newArrayMInNumRange = parseInt(prompt('Введіть мінімальне з діапазону значень массива число'))
   let newArrayMaxNumRange = parseInt(prompt('Введіть максимальне з діапазону значень массива число, більше за 100'))
   function getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange) {
      let newArr = []
      for (let i = 1; i <= newArrayNumCount; i++){
         let newArrayRundomNum = newArrayMInNumRange + Math.floor(Math.random() * (newArrayMaxNumRange - newArrayMInNumRange + 1))
         let arrElement = newArrayRundomNum
         newArr.push(arrElement)
      }
      return newArr
   }
   let newArray = getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange)
   function getOverHundredNumArray(newArray) {
      let overHundredNumArray = []
      for (let index of newArray) {
         if (index > 100) overHundredNumArray.push(index)
      }
      return overHundredNumArray
   }
   let overHundredNumArray = getOverHundredNumArray(newArray)
      document.write(`${overHundredNumArray}`)
}
 