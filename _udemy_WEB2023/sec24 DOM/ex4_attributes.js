const bannerId = document.querySelector('#banner').id   // id속성 가져오기
console.log(bannerId)

document.querySelector('#banner').id = 'whoops'   // id속성 변경

/* getAttribute */
const firstLink = document.querySelector('a')
console.log(firstLink.getAttribute('href'))   // href속성 가져오기

firstLink.setAttribute('href', 'https://www.naver.com')   // set으로 href속성 변경


const input = document.querySelector('input[type="text"]')
input.type = 'color'
input.setAttribute('type','range')