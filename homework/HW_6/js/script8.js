"use strict"

let deposit = 1000
let yearIncomePercentage = 20
let yearTaxPercentage = 5
let finalIncome = 0
for (let i = 1; i <= 20; i++){
   let yearIncome = (deposit * yearIncomePercentage / 100)-(deposit * yearTaxPercentage / 100)
   finalIncome+= yearIncome
}
document.write(`За 20 років чоловіче отримає ${finalIncome} чистого прибутку.`)