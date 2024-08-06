"use strict"

  let highMonthDeg, lowMonthDeg, highYearDeg, lowYearDeg, averageYearDeg 
      highYearDeg = 0
      lowYearDeg = 0
      for (let i = 1; i <= 12; i++) {
        highMonthDeg = parseFloat(prompt(`Введіть максимальну температуру повітря у ${i} місяці року`))
        lowMonthDeg = parseFloat(prompt(`Введіть мінімальну температуру повітря у ${i} місяці року`))
        highYearDeg += highMonthDeg
        lowYearDeg += lowMonthDeg
        console.log(`${highYearDeg} ${lowYearDeg}`)
        averageYearDeg = (highYearDeg / 12 + lowYearDeg / 12) / 2
      }
      document.write(`Середня річна температура повітря складає ${averageYearDeg} градусів.`)