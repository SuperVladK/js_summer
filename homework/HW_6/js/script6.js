"use strict"
let symbol = '0'
for (let loop = 1; loop <= 3; loop++) {
   for (let i = 0; i < 8; i++) {
      for (let a = 1; a <= i; a++) {
         document.write(`${symbol}`)
      }
      document.write(`<br>`)
   }
}
