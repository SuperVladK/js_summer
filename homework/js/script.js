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

// let arr = [3, 45, 678]
// for (let item of arr) {
//    let msg
//    if (item < 10) msg = 'Hi'
//    else msg = 'Bye'
// document.write(`${msg} `)
// }

// let prices = [3, 101, 56, 984, 34]
// let moreThanHundred = []
// for (let item of prices) {
//    (item) > 100 ? moreThanHundred.push(item) : item = item
// }
// let sum = 0
// moreThanHundred.forEach((element) => (sum += element))
// document.write(`${sum}`)

// let prices = [4, 67, 284, 567, 101]
// let sum = 0
// prices.forEach((element) => {
//    if (element > 100) sum+=element
// })
// document.write(`${sum}`)

// let arr = [-3,4,-5,4]
// arr.forEach((element, ind, arr) => { if (element > 0) arr[ind] = 0});
// document.write(`${arr}`)

// let arr = [34, 34, 46, 57, 9, 1,]
// let a = arr.find(el => el >= 23)
//  document.write(`${a}`)

// let prices = [234,4,564,243,345,576,34,]
// for (let index = 0; index < prices.length; index++){
//    document.write(`<div>${index+1} - ${prices[index]}</div>`)
// }

// let prices = [234, 4, 564, 243, 345, 576, 34,]
// prices.forEach((element, index) => {
//    document.write(`<div>${index+1} - ${element}</div>`)
// })

// let names = ['Olga', 'Ivan', 'Bob']
// let firstLetterNames = names.map(element => element[0])
// document.write(firstLetterNames) 

// let weekdays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Fri']
// let order = [5, 2, 6, 5, 3, 1, 7]
// let titles = order.map((element) => weekdays[element-1])
// document.write(`${titles}`)

// let weekdays = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Fri']
// let order = [5, 2, 6, 5, 3, 1, 7]
// let titles = order.map((element) => {
//    if (element >= 1 && element <= 7) return weekdays[element - 1]
//    else return 'Wrong'
// })
// document.write(`${titles}`)

// let arr = [1, 3, 5, 7, 9]
// let sec = arr.pop()
// document.write(`${sec}, <br> ${arr} <br>`)
// let a = arr.pop()
// document.write(`${a} <br> ${arr}` )

// let yearsArr = [2009, 2010, 2023, 2010, 2045]
// for (let i = 0; i < yearsArr.length; i++){
//    if (yearsArr[i] === 2010) {
//       yearsArr.splice(i + 1, 0, 2015)
//       i++
//    }
// }
//    document.write(yearsArr)

// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// temperatures.splice(5,3,0,0,0)
// document.write(temperatures)

// let temperatures = [-10, -9, 5, 13, 17, 16, 18, 19, 21, 11, 7, -4]
// let changed = temperatures.slice(0, 6)
// let second = temperatures.slice(6)
// document.write(`${changed}<br>${second}`)

// let arr = [4,8,6,5,7,4]
// let r = arr.indexOf(6)
// document.write(r)

// let arr = [4, 8, 6, 5, 0, 7, 4, 46, 0, 7, 23, 0, 24, 8, 31, 4]
// let firstZero = arr.indexOf(0)
// let lastZero = arr.lastIndexOf(0)
// let newArr = arr.slice(firstZero + 1, lastZero)
// document.write(newArr)

// let arr = [4, 8, 6, 5, 0, 7, 4, 46, 0, 7, 23, 0, 24, 8, 31, 4]
// let firstZero = arr.indexOf(0)
// let secondZero = arr.indexOf(0, firstZero + 1)
// let thirdZero = arr.indexOf(0, secondZero + 1)
// let newArr = []
//    newArr.push(firstZero, secondZero, thirdZero)
//    document.write(newArr)


// let arr = [4, 8, 6, 5, 0, 7, 4, 46, 0, 7, 23, 0, 24, 8, 31, 4]
// let bad = arr.findLastIndex((el) => el < 4)
//  document.write(bad)

// let arr = [4, 5, 4, 5, 1, 2, 4]
// let firstBadScore = arr.find((el) => el < 4)
// document.write(firstBadScore)

// let roomNums = [3, 4, 6, 7, 8, 34, 23, 12, 34]
// if (roomNums.includes(5)) document.write('Yes')
// else document.write('No')

// let arr = [4, 8, 6, 5, 0, 7, 4, 46, 9, -7, 23, 0, 24, 8, -31, 4]
// let sum = arr.reduce((prevSum, el, index, arr) => prevSum + el, 0)
// document.write(sum)

// let arr = [4, 8, 6, -5, 0, 7, -4, 46, 9, -7, 23, 0, 24, 8, -31, 4]
// let temp = arr.filter((el) => el > 0)
// document.write(temp)

