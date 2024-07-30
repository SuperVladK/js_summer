"use strict"

let monthNum = parseInt(prompt('Введіть номер місяця','1-12'))
const spring = 'весна'
const summer = 'літо'
const autumn = 'осінь'
const winter = 'зима'
if (monthNum === 12 || monthNum < 3) 
   document.write(`Ваша пора року ${winter}`)
else if (monthNum > 2 && monthNum < 6)
   document.write(`Ваша пора року ${spring}`)
else if (monthNum > 5 && monthNum < 9)
   document.write(`Ваша пора року ${summer}`)
else if (monthNum > 8 && monthNum < 12)
   document.write(`Ваша пора року ${autumn}`)
else 
   document.write('Ви ввели некоректне значення')
