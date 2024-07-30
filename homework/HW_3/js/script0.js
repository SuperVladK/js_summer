"use strict"

let userAge = parseInt(prompt('Age'))
const shopCar = 'Toyota'
const allowedAge = 21
if (userAge > allowedAge) {
   alert('Welcome!')
   let car = prompt('Car')
   if (car === 'Toyota')
      alert('Its yours!')
   else 
      alert('Buy it')
} 
else
   alert('Grow up')