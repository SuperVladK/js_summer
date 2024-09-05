"use strict"

  if (confirm('Почати тестування?')) {
   let pricesCount = parseInt(prompt('Введіть кількість цін на цінні папери'))
   let pricesArr = []
   for (let i = 1; i <= pricesCount; i++) {
      let price = 1 + Math.floor(Math.random() * 10000 - 1)
         pricesArr.push(price)
   }
     let moreThanThousandIndex = pricesArr.reduce((newArr, el, index) => {
        if (el > 1000) newArr.push(index)
        return newArr
     }, [])
     document.write(moreThanThousandIndex)
}
 

