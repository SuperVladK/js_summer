"use strict"

let initialDeposit = 1000
let firstDepositIncomePercentage = 20
let firstDepositTime = 20
let firstTotalDepositIncome = 0
let firstDepositIncome
let secondDeposit = initialDeposit + firstTotalDepositIncome
let secondDepositTime = 17
let secondDepositIncomePercentage = 27
let secondDepositIncome
let secondTotalDepositIncome = 0
for (let i = 1; i <= firstDepositTime; i++){
   firstDepositIncome = initialDeposit * firstDepositIncomePercentage / 100
   firstTotalDepositIncome += firstDepositIncome
   console.log(firstTotalDepositIncome)
}
for (let i = 1; i <= secondDepositTime; i++){
   secondDepositIncome = (firstTotalDepositIncome + initialDeposit) * secondDepositIncomePercentage / 100
   secondTotalDepositIncome += secondDepositIncome
   console.log(secondTotalDepositIncome)
}
let finalIncome = firstTotalDepositIncome + secondTotalDepositIncome
document.write(`За 37 років чоловіче отримає ${finalIncome} грн. чистого прибутку.`)