"use strict"

      let totalProfit = 0
      let weekQuantity = parseInt(prompt('Введіть кількість тижнів'))
for (let week = 1; week <= weekQuantity; week++) {
      let weekProfit = 0
         for (let day = 1; day <=7; day++) {
            let dayProfit = parseFloat(prompt(`Введіть виручку за ${day} день ${week} тижня`))
            weekProfit += dayProfit
         }
      document.write(`Виручка за тиждень № ${week} складає ${weekProfit} грн.<br>`)
      totalProfit+= weekProfit
      }  
      document.write(`Загальна виручка за період складає ${totalProfit} грн.`)
      
