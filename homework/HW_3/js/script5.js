"use strict"

let drivingLiсenсeCategory = prompt('Введіть назву категорії водія на латині' , 'A, B, C')
const aCategory = 'мотоциклом'
const bCategory = 'легковим автомобілем'
const cCategory = 'вантажівкою'
if (drivingLiсenсeCategory.toUpperCase() === 'A') 
   document.write(`Ви можете керувати ${aCategory}`)
else if (drivingLiсenсeCategory.toUpperCase() === 'B')
   document.write(`Ви можете керувати ${bCategory}`)
else if (drivingLiсenсeCategory.toUpperCase() === 'C')
   document.write(`Ви можете керувати  ${cCategory}`)
else 
   document.write('Ви ввели некоректне значення')

