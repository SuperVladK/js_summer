"use strict"

let numOne = parseFloat(prompt('Введіть перше довільне дійсне число'))
let numTwo = parseFloat(prompt('Введіть друге довільне дійсне число'))
const sum = numOne + numTwo
const multiply = numOne * numTwo
const division = numOne / numTwo
document.write(`<table border="2px solid black">
<tr>
<td> Сума </td> <td> Добуток </td> <td> Частка </td>
</tr>
<tr>
<td> ${sum} </td> <td> ${multiply} </td> <td> ${division} </td>
</tr>
</table>`)