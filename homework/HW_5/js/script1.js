"use strict"

let oddNum = 0
let evenNum = 0
for (let i = 1; i <= 100; i++) {
   let randomNum = 1 + Math.floor(Math.random() * 1000)
   if (randomNum % 2 === 0)
      evenNum++
   else oddNum++
}
if (evenNum > oddNum)
   document.write(`Кількість парних чисел більше, ніж непарних, а саме ${evenNum}`)
else if (oddNum > evenNum)
   document.write(`Кількість парних чисел менше, ніж непарних, а саме ${evenNum}`)
else 
document.write(`Парних чисел та непарних порівну.`)