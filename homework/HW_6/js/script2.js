"use strict"

let symbol = '0'
for (let i = 1; i <= 6; i++){
   for (let a = 1; a <= i; a++) {
      document.write(`${symbol}`)
   }
   document.write(`<br>`)
}