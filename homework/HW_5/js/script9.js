"use strict"

let cellNum = 0
document.write(`<div class="table-pack">`)
   for (let u = 1; u <= 3; u++) {
   document.write(`<table border="1px solid black">`)
      for (let a = 1; a <= 3; a++) {
      document.write(`<tr>`)
         for (let i = 1; i <= 3; i++){
         cellNum++
         document.write(`<td class="cell">${cellNum}</td>`)
         }
      document.write(`</tr>`)
      }
   document.write(`</table>`)
   }
document.write(`</div>`)