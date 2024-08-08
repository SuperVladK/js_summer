"use strict"

let prize = 0
let sum = 0
document.write(`<div class="play-box">`)
for (let i = 1; i <= 3; i++){
      let randomNum = 1 + Math.floor(Math.random() * 4)
      document.write(`<img src="../HW_5/img/${randomNum}.webp">`)
      sum += Math.pow(10, randomNum) 
}
switch (sum) {
      case 30: prize = 100
            break
      case 300: prize = 200
            break
      case 3000: prize = 500
            break
      case 30000: prize = 1000
            break
}
document.write(`<br>Ваш виграш складає ${prize} $`)
      


