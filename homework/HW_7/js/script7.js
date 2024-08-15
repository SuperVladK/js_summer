"use strict"

function getTable(row, column) {
   let tableSketch = '<table>'
   for (let i = 1; i <= row; i++) {
      tableSketch += '<tr>'
      for (let j = 1; j <= column; j++) {
         tableSketch += '<td>Hello!!!</td>'
      }
      '</tr>'
   }
   '</table>'
   return tableSketch
   } 
   let row = parseInt(prompt('Введіть кількість рядків у таблиці'))
   let column = parseInt(prompt('Введіть кількість стовпчиків у таблиці'))
   document.write(`${getTable(row, column)}`)
