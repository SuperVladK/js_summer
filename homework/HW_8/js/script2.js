"use strict"

if (confirm('Почати тестування')) {
   function getTotalVisitorsNum() {
      let totalVisitorsList = []
      for (let day = 1; day <= 7; day++) {
         let visitorsNum = parseInt(prompt(`Введіть кількість відвідувачів у день № ${day}`))
         totalVisitorsList.push(visitorsNum)
      }
      return totalVisitorsList
   }
   let visitorsList = getTotalVisitorsNum()
   
   function getLessVisitorsDays(visitorsList) {
      let minDayList = [ ]
      for (let i = 0; i < visitorsList.length;i++){
         if (visitorsList[i] < 20) 
         minDayList.push(i + 1)
      }
      return minDayList
   }
   let totalMinDayList = getLessVisitorsDays(visitorsList)
   document.write(`Протягом тижня магазин відвідували:<br> в понеділок - ${visitorsList[0]} осіб;<br>у вівторок - ${visitorsList[1]} осіб<br>у середу - ${visitorsList[2]} осіб; <br>у четвер - ${visitorsList[3]} осіб;<br>у пʼятницю - ${visitorsList[4]} осіб;<br>у суботу - ${visitorsList[5]} осіб<br>у неділю - ${visitorsList[6]} осіб. <br>В дні №№ ${totalMinDayList} кількість відвідувачів була менше за 20.<br>`)
   
   function getWeekDayVisitorsNum(visitorsList) {
   let weekDaysVisitorsNum = 0
      for (let o = 0; o < visitorsList.length - 2; o++){
      weekDaysVisitorsNum += visitorsList[o]
      }
      return weekDaysVisitorsNum
   }
   let totalWeekDayVisitorsNum = getWeekDayVisitorsNum(visitorsList)
   document.write(`Загальна кількість відвідувачів у робочі дні склала ${totalWeekDayVisitorsNum} осіб.<br>`)

   function getWeekEndVisitorsNum(visitorsList) {
   let weekEndVisitorsNum = 0
      for (let o = 5; o < visitorsList.length; o++){
      weekEndVisitorsNum += visitorsList[o]
      }
      return weekEndVisitorsNum
   }
   let totalWeekEndVisitorsNum = getWeekEndVisitorsNum(visitorsList)
   document.write(`Загальна кількість відвідувачів у вихідні дні склала ${totalWeekEndVisitorsNum} осіб.<br>`)

   function getMinVisitorsNum(visitorsList) {
      let minNumber = +Infinity
      for (let day = 0; day < visitorsList.length; day++){
         if (visitorsList[day] < minNumber) minNumber = visitorsList[day]
      }
      return minNumber
   }
   let minVisitors = getMinVisitorsNum(visitorsList)

   function getMinVisitorsDay(visitorsList) {
      let minVisitorsDay
      for (let r = 0; r < visitorsList.length; r++){
         if(minVisitors === visitorsList[r]) minVisitorsDay = r + 1
      }
      return minVisitorsDay
   }
   let minDay = getMinVisitorsDay(visitorsList)
   document.write(`Мінімальна кількість відвідувачів склала ${minVisitors} і була у день № ${minDay}<br>`)
}
   


   
   
   