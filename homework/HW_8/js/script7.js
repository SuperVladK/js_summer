"use strict"

if (confirm('Почати тестування')) {
   let monthTax
   let yearTax = 0
   let firstHalfYearTax = 0
   let secondHalfYearTax = 0
   let summerTax = 0
   let secondQuarterTax = 0
   let pairMonthTax = 0
   let firstSeasonMonthTax = 0
   let yearTaxArray = []
   for (let month = 1; month <= 12; month++){
      monthTax = parseFloat(prompt(`Введіть необхідну до сплати суму за ${month} місяць`))
      yearTax += monthTax
      yearTaxArray.push(monthTax)
   }

   for (let i = 0; i < yearTaxArray.length - 6; i++){
      firstHalfYearTax += yearTaxArray[i]
   }

   for (let a = 6; a < yearTaxArray.length; a++){
      secondHalfYearTax += yearTaxArray[a]
   }

   for (let s = 5; s < yearTaxArray.length - 4; s++){
      summerTax += yearTaxArray[s]
   }   

   for (let f = 3; f < yearTaxArray.length - 6; f++){
      secondQuarterTax += yearTaxArray[f]
   }   

   for (let d = 1; d <= yearTaxArray.length; d+=2){
      pairMonthTax += yearTaxArray[d]
   } 

   for (let g = 2; g <= yearTaxArray.length; g+=3){
      firstSeasonMonthTax += yearTaxArray[g]
   } 

   document.write(`До сплати:<br>За весь рік - ${yearTax} грн<br>За першу половину року - ${firstHalfYearTax} грн<br>За другу половину року - ${secondHalfYearTax} грн<br>За літо - ${summerTax} грн<br>За ІІ квартал - ${secondQuarterTax} грн<br>За парні місяці ${pairMonthTax} грн<br>За початкові місяці сезонів ${firstSeasonMonthTax} грн`)
}