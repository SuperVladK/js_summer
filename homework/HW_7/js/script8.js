"use strict"
   
function getPicture(path1, path2, path3, path4,pictureNum) {
   let src
   switch (pictureNum) {
      case 1: src = path1
         break
      case 2: src = path2
         break
      case 3: src = path3
         break
      case 4: src = path4
         break
   }
   return src
}
let path1 = './img/1.webp'
let path2 = './img/2.webp'
let path3 = './img/3.webp'
let path4 = './img/4.webp'
let pictureNum = 1 + Math.floor(Math.random() * 4)
document.write(`<img class="yo" src="${getPicture(path1, path2, path3, path4, pictureNum)}" alt="image">`)