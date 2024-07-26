"use strict"

let numOne = parseFloat(prompt('Введіть перше довільне дійсне число'))
let numTwo = parseFloat(prompt('Введіть друге довільне дійсне число'))
const sum = numOne + numTwo
const multiply = numOne * numTwo
const division = numOne / numTwo
document.write(`<table border="2px solid black">
<tr>
<th> Сума </th> <th> Добуток </th> <th> Частка </th>
</tr>
<tr>
<td> ${sum} </td> <td> ${multiply} </td> <td> ${division} </td>
</tr>
</table>`)