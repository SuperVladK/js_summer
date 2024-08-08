"use strict"


let rowShipPosition = parseInt(prompt('Введіть місце знаходження корабля за віссю х'))
let columnShipPosition = parseInt(prompt('Введіть місце знаходження корабля за віссю У'))
let missileLeft = parseInt(prompt('Введіть кількість ракет'))
let rowAim
let columnAim
for (let shot = 1; shot <= missileLeft; ) {
      rowAim = parseInt(prompt('Введіть ціль за віссю Х'))
      columnAim = parseInt(prompt('Введіть ціль за віссю У'))
      missileLeft--
      if (rowShipPosition === rowAim && columnShipPosition === columnAim)
      {
            alert('Super! You won!!')
            break
      }
      else
            alert('You missed! Try again!')
}
if (missileLeft === 0) alert('Unfortunately you failed!')