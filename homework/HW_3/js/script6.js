"use strict"

let dayWeek = parseInt(prompt('Введіть номер дня тижня (від 1 до 7)','1-7'))
      let monday = 'понеділок'
      let tuesday = 'вівторок'
      let wednesday = 'середа'
      let thursday = 'четвер'
      let friday = 'пʼятниця'
      let saturday = 'субота'
      let sunday = 'неділя'
      let result
      if (dayWeek === 1) 
         result = monday
      else if (dayWeek === 2) 
         result = tuesday
      else if (dayWeek === 3) 
         result = wednesday
      else if (dayWeek === 4) 
         result = thursday
      else if (dayWeek === 5) 
         result = friday
      else if (dayWeek === 6) 
         result = saturday
      else 
         result = sunday
      document.write(`Ваш день ${result}`)