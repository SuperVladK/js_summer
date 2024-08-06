"use strict"

document.write(`<table border="1px solid black" >`)
for (let a = 1; a <= 3; a++) {
document.write(`<tr>`)
for (let i = 1; i <= 7; i++){
   document.write(`<td class="cell">${i}</td>`)
}
   document.write(`</tr>`)
}
document.write(`</table>`)
