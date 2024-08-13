"use strict"

document.write(`<div>`)
let symbol = '0'
for (let i = 1; i <= 6; i++){
   for (let a = i; a <= 6; a++) {
      document.write(`${symbol}`)
   }
   document.write(`<br>`)
}
document.write(`</div>`)