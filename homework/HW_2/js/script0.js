"use strict"

      let firstNum = parseFloat(prompt(`Введіть довільне число`))
      let secondNum = parseFloat(prompt(`Введіть друге довільне число`))
      let thirdNum = parseFloat(prompt(`Введіть третє довільне число`))
      const rez_1 = firstNum + 12 + secondNum
      const rez_2 = Math.sqrt((firstNum + secondNum) / (2 * firstNum))
      const rez_3 = Math.cbrt((firstNum + secondNum) * thirdNum)
      const rez_4 = Math.sin(firstNum - secondNum)
      document.write(`<ol>
         <li>S1 = ${rez_1.toFixed(2)}</li>
         <li>S2 = ${rez_2.toFixed(2)}</li>
         <li>S3 = ${rez_3.toFixed(2)}</li>
         <li>S4 = ${rez_4.toFixed(2)}</li>
         </ol>
      `)