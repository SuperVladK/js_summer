"use strict"
   
function ShowBanner(title, src, link) {
   document.write(`<div class="banner">
      <h2>${title}</h2>
      <a target="_blank" href="${link}"><img src="${src}"</a>
      </div>`)
}
let title = 'Super-banner'
let src = './img/smile.webp'
let link = 'https://www.youtube.com/watch?v=nmSCJwJy-dY'
ShowBanner(title, src, link)