"use strict"

if (confirm('Почати тестування')) {
   let itemsNum = parseInt(prompt('Введіть кількість товарів'))
   let userMoney = parseFloat(prompt('Введіть кількість грошей у покупця.'))
   let pricesArray = []
   let itemsArray = []
   for (let i = 1; i <= itemsNum; i++){
      let itemName = prompt(`Введіть назву тоаару № ${i}`)
      let itemPrice = parseFloat(prompt(`Введіть ціну товару № ${i}`))
      itemsArray.push(itemName)
      pricesArray.push(itemPrice)
   }
   let allowedPrices = []
   let allowedItems = []
   for (let a = 0;  a < itemsArray.length; a++){
      if (userMoney >= pricesArray[a]) 
         allowedItems.push(itemsArray[a])
      if (userMoney >= pricesArray[a])
         allowedPrices.push(pricesArray[a])
   }
   document.write(`У покупця є ${userMoney} грн<br> Він може придбати ${allowedItems} за ${allowedPrices} грн відповідно.`)
}