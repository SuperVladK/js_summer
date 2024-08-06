"use strict"

let sumToPay = parseInt(prompt('Введіть суму грошей до сплати.'))
let customerMoney
do {
      customerMoney = parseInt(prompt('Введіть суму грошей, яку Ви зараз готові заплатити.'))
      sumToPay -= customerMoney
      if (sumToPay <=0) break
      alert(`Залишилось заплатити ${sumToPay} \$`)
} while (sumToPay >= 0)
alert('Ви заплатили достатньо!  Можете забрати товар!')