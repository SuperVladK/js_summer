"use strict"

let itemPrize = parseFloat(prompt('Введіть вартість товару у грн'))
let itemCount = parseInt(prompt('Введіть кількість товару'))
const vat = 5 / 100
let totalPrize = itemPrize * itemCount
let totalVat = totalPrize * vat
document.write(`Загальна вартість товару складає ${totalPrize.toFixed(2)} грн <br> ПДВ складає ${totalVat.toFixed(2)} грн`)