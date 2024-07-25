"use strict"

let firstProductPrise = parseFloat(prompt(`Введіть ціну першого товару (грн)`))
let firstProductQnt = parseInt(prompt(`Введіть кількість одиниць першого товару`))
let secondProductPrise = parseFloat(prompt(`Введіть ціну другого товару (грн)`))
let secondProductQnt = parseInt(prompt(`Введіть кількість одиниць другого товару`))
let thirdProductPrise = parseFloat(prompt(`Введіть ціну третього товару (грн)`))
let thirdProductQnt = parseInt(prompt(`Введіть кількість одиниць третього товару`))
const totalFirstProductPrise = firstProductPrise * firstProductQnt
const totalSecondProductPrise = secondProductPrise * secondProductQnt
const totalThirdProductPrise = thirdProductPrise * thirdProductQnt
const totalProductQnt = firstProductQnt + secondProductQnt + thirdProductQnt
const totalProductPrise = totalFirstProductPrise + totalSecondProductPrise + totalThirdProductPrise
document.write(`<table>
               <tr>
               <td class="first-column">Товар №1</td> <td class="second-column">х1 шт</td> <td class="third-column">${firstProductPrise} грн</td>
               </tr>
               <tr>
               <td class="first-column">Товар №1</td> <td class="second-column">х${firstProductQnt} шт</td> <td class="third-column">${totalFirstProductPrise.toFixed(2)} грн</td>
               </tr>
               <tr>
               <td class="first-column">Товар №2</td> <td class="second-column">х1 шт</td> <td class="third-column">${secondProductPrise} грн</td>
               </tr>
               <tr>
               <td class="first-column">Товар №2</td> <td class="second-column">х${secondProductQnt} шт</td> <td class="third-column">${totalSecondProductPrise.toFixed(2)} грн</td>
               </tr>
               <tr>
               <td class="first-column">Товар №3</td> <td class="second-column">х1 шт</td> <td class="third-column">${thirdProductPrise} грн</td>
               </tr>
               <tr>
               <td class="first-column">Товар №3</td> <td class="second-column">х1${thirdProductQnt} шт</td> <td class="third-column">${totalThirdProductPrise.toFixed(2)} грн</td>
               </tr>
               <tr>
               <td class="first-column">Загальна кількість товару</td> <td></td> <td class="third-column">${totalProductQnt} шт</td> 
               </tr>
               <tr>
               <td class="first-column">Загальга ціна товару</td> <td></td> <td class="third-column">${totalProductPrise.toFixed(2)} грн</td>
               </tr>
               </table>
`)