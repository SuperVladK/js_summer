"use strict"
document.write(`<div class="pyramid"`)
let symbol = '0'
for (let i = 0; i < 8; i++){
   for (let a = 1; a <= i; a++) {
      document.write(`${symbol}`)
   }
   document.write(`<br>`)
}
document.write(`</div>`)