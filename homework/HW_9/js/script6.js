"use strict"

if (confirm('Почати тестування?')) {
   let newArrayNumCount = (parseInt(prompt('Введіть кількість елементів в масиві.')))
   let newArrayMInNumRange = parseInt(prompt('Введіть мінімальне з діапазону значень массива число'))
   let newArrayMaxNumRange = parseInt(prompt('Введіть максимальне з діапазону значень массива число'))
   function getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange) {
      let newArr = []
      for (let i = 1; i <= newArrayNumCount; i++) {
         let newArrayRundomNum = newArrayMInNumRange + Math.floor(Math.random() * (newArrayMaxNumRange - newArrayMInNumRange + 1))
         let arrElement = newArrayRundomNum
         newArr.push(arrElement)
      }
      return newArr
   }
   let newArray = getNewArray(newArrayNumCount, newArrayMInNumRange, newArrayMaxNumRange)

   function getMultiplyTwoArray(newArray) {
      let twoArr = newArray.map(element => element > newArray[0] ? element * 2 : element)
      return twoArr
   }
   let MultiplyTwoArray = getMultiplyTwoArray(newArray)
   document.write(`${newArray}<br>`)
   document.write(`${MultiplyTwoArray}`)
}
 

