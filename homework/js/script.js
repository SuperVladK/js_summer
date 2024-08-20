"use strict"

// for (let i = 1; i <= 5; i++) {
//    let numOne = parseInt(prompt('num1'))
//    let numTwo = parseInt(prompt('num2'))
//    let result
//    if (numOne === numTwo) 
//       result = numOne + numTwo
//    else
//       result = numOne * numTwo
//    document.write(`Результат - ${result}<br>`)
// }

// for (let i = 1; i <= 6; i++){
//    alert(`Guessing No ${i}`)
//    let min = 1
//    let max = 5
//    let randomNum = min + Math.floor(Math.random() * (max - min) + 1)
//    let userNum = parseInt(prompt('Num'))
//    while (randomNum !== userNum) {
//          alert('Try it more!')
//          userNum = parseInt(prompt('Num'))
//       }
//    document.write(`${randomNum}<br>`)
// }

// for (let i = 12; i <= 34; i += 4) {
//    document.write(`<div>${i}</div>`)
// }
   
// for (let month = 7; month <= 12; month++) {
//    document.write(`<div>Місяць - ${month}</div>`)
// }

// for (let i = 1; i <= 4; i++)
// {
//    let result
//    let firstNum = 1 + Math.floor(Math.random() * 9)
//    let secondNum = 1 + Math.floor(Math.random() * 9)
//    let correctAnswers = firstNum + secondNum
//    let userNum = parseInt(prompt(`Скільки буде ${firstNum} + ${secondNum}`))
//    if (userNum === firstNum + secondNum)
//       result = 'Right'
//    else 
//       result = `Wrong, right answer is ${correctAnswers}`
//    alert(`${result}`)
//    document.write(`${i} - ${result}<br>`)
// }

// for (let i = 3; i <= 5; i++)
//    for (let a = 1; a <= 9; a++)
//    {
//       let result
//       let firstNum = i
//       let secondNum = a
//       let correctAnswers = i * a
//       let userNum = parseInt(prompt(`How much is ${firstNum} * ${secondNum}`))
//       if (userNum === correctAnswers)
//          result = 'Right'
//       else 
//          result = `Wrong, right answer is ${correctAnswers}`
//       alert(`${result}`)
//       document.write(`${i}*${a} - ${result}<br>`)
//    }

// let searchName = 'Ivan'
// let numberIvan = 0
// for (let name = 1; name <= 5; name++) {
//    let helloName = prompt(`Tell the name of ${name} pupil`)
//    if (helloName === searchName)
//       numberIvan ++
// }
// document.write(`There are totally ${numberIvan} Ivans in the room.`)

// for (let sec = 10; sec >= 1; sec--)
// alert(sec)

// let totalBunsNum = parseInt(prompt('buns num'))
// while (totalBunsNum > 0) {
//    let userBunsNum = parseInt(prompt('How much buns do you want?'))
//    if (totalBunsNum >= userBunsNum) {
//       totalBunsNum -= userBunsNum
//       alert(`Here you are! ${totalBunsNum} left`)
//    }
//    else
//       alert('Sorry, it isn\'t enough!')
// }
// document.write('This is it!')

// let n = 1
// let m = 10
// while (n < m) {
//    document.write(`${n} - ${m}<br>`)
//    n++
//    m--
// }

// let n = 0
// let m = 10
// document.write(`${n} - ${m}<br>`)
// for (let i = 0; i < 10; i++) {
//    n++
//    m--
//    document.write(`${n} - ${m}<br>`)
// }

// for (let ul = 1; ul <= 4; ul++) {
//    document.write(`<ul>`)
//    for (let li = 1; li <= 3; li++) {
//       document.write(`<li>${li}</li><br>`)
//    }
//    document.write(`</ul>`)
// }

// for (let i = 1; i <= 2; i++){
//    alert(`Guessing No ${i}`)
//    let min = 1
//    let max = 10
//    let randomNum = min + Math.floor(Math.random() * (max - min) + 1)
//    let userNum
//    do {
//       userNum = parseInt(prompt('Num'))
//       alert('Try it more!')
//    }
//    while (randomNum !== userNum)
//    document.write(`Num ${i} - ${randomNum}<br>`)
// }

// let phonePrice = 10000
// let money = 0
// let moneyGift
// do {
//    alert(`Helen has ${money} \$`)
//    moneyGift = parseInt(prompt('Give some money'))
//    money+= moneyGift
// }
// while (money < phonePrice)
// document.write(`Collected!<br>Helen has ${money} $ and can buy the phone!`)

// document.write(`<container class="vertical-diagramm">`)
// for (let i = 1; i <= 8; i++){
// let width = 1 + Math.floor(Math.random()*500)
//    document.write(`<div class="diagramm" style="height:${width}px">${width}</div>`)
// }
// document.write(`</container>`)

// for (let i = 1; i <= 10; i++){
//    let left = 1 + Math.floor(Math.random() * 1200)
//    let top = 1 + Math.floor(Math.random() * 800)
//    document.write(`<img class="smile" style="position:absolute; left:${left}px; top:${top}px"  src="../HW_5/img/smile.webp">`)
// }

// for (let min = 1, max = 10; min <= 91; min += 10, max += 10) {
//    document.write(`<hr>`)
//    for (let i = 1; i <= 3; ) {
//       let randomNum = 1 + Math.floor(Math.random() * (max - min + 1))
//       if (randomNum % 2 !== 0) continue
//       i++
//       document.write(`${randomNum}-`)
//    }
// }

// let minYear = parseInt(prompt('Введіть мінімальний рік діапазону'))
// let maxYear = parseInt(prompt('Введіть максимальний рік діапазону'))
// for (let num = minYear; num <= maxYear; num++) {
//    if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) 
//    document.write(`${num}<br>`)
// }

// for (let c1 = 1; c1 <= 9; c1++)
//    for (let c2 = 0; c2 <= c1; c2++)
//       for (let c3 = 0; c3 <= c2; c3++)
//          document.write(`${c1}${c2}${c3}<br>`)

// document.write(`<select>`)
// for (let num = 0; num <= 20; num+=2)
//    document.write(`<option value="${num}">${num}</option>`)
// document.write(`</select>`)

// let firstChar = prompt('Перша буква')
// let secondChar = prompt('Друга буква')
// let firstCharCode = firstChar.charCodeAt(0)
// let secondCharCode = secondChar.charCodeAt(0)
// document.write(`<select>`)
// for (let code = firstCharCode; code <= secondCharCode; code++) {
//    document.write(`<option value="${code}">${code}</option>`)
// }
// document.write(`</select>`)
// document.write(`<select>`)
// for (let char = firstCharCode; char <= secondCharCode; char++){
//    document.write(`<option value="${char}">${String.fromCharCode(char)}</option>`)
// }
// document.write(`</select>`)

// function isPensioner(age, pensioner) {
//    return age>=pensioner
// }
// let userAge = parseInt(prompt('Введіть Ваш вік.'))
// let msg = isPensioner(userAge, 65) ? 'Rest' : 'Work'
// document.write(`${msg}`)

// let prices = []
// let pricesNum = parseInt(prompt('Add num'))
// for (let i = 0; i < pricesNum; i++){
//    let price = parseFloat(prompt('Add price'))
//    prices.push(price)
//    console.log(prices)
// }
// let pricesSum = 0
// for (let a = 0; a < prices.length; a++){
//    pricesSum+= prices[a]
// }
// document.write(`${pricesSum}`)

// if (confirm('Почати тестування')) {
//    let pupilNamesList = []
//    let pupilNamesListQnt = parseInt(prompt('Скільки треба ввести імен учнів?'))
//    for (let i = 1; i <= pupilNamesListQnt; i++) {
//       let pupilName = prompt(`Введіть імʼя ${i} учня`)
//       pupilNamesList.push(pupilName)
//    }
//    console.log(pupilNamesList)
//    let nameIvanQnt = 0
//    for (let a = 1; a <= pupilNamesList.length; a++) {
//       if (pupilNamesList[a] === 'Ivan') nameIvanQnt++
//    }
//    document.write(`В класі ${nameIvanQnt} Іванів.`)
// }

