"use strict"

let itemPrice = parseFloat(prompt('Введіть ціну товару'))
let moneyAmount = parseFloat(prompt('Введіть наявну кількість грошей'))
let moneyLeft = moneyAmount - itemPrice
if (moneyAmount > itemPrice || moneyAmount === itemPrice) {
   document.write('Вітаємо з придбанням чудового товару!<br>') 
   if (moneyLeft > 4 || moneyLeft === 4)
      document.write('Можливо купимо ще лотерейку і Вам пощастить?')
   else if (moneyLeft < 4) 
      document.write('Нажаль ще на лотерейку Вам не вистачає.')
}
else 
document.write('Нажаль Вам не вистачає грошей.')