"use strict"

let personAge = parseInt(prompt('Введіть Ваш вік.'))
if (personAge < 7) 
   document.write('Вітаю Вас! Ви ще ходите в садочок!')
else if (personAge < 18)
   document.write('Ви вже серйозний учень у школі!')
else if (personAge < 23)
   document.write('Нічого собі! Ви крутий студент!')
else if (personAge < 62)
   document.write('Скоро довгоочікувана пенсія, але Ви ще працівник і мусите працювати!')
else 
document.write('Пенсіонере! Час їхати на рибалку!')