/* innerText */
const innerText1 = document.querySelector('p').innerText  // display:none; 처럼 안보이는 속성은 안나옴
console.log(innerText1)

// document.querySelector('p').innerText = 'hohohoho'  // 변경 가능



/* textContent */
const textContent1 = document.querySelector('p').textContent  // 마크업에 따라 - display:none; 처럼 안보이는 속성도 나옴
console.log(textContent1)



/* innerHTML */
const innerHTML1 = document.querySelector('p').innerHTML  // 태그포함 출력
console.log(innerHTML1)

document.querySelector('h1').innerHTML = '<i>hohohoho</i>'  // 변경 가능
document.querySelector('h1').innerHTML += '<sup>lololol</sup>'  // += 가능
document.querySelector('p').innerText = '<i>hohohoho</i>'  // innerText는 태그로 읽지않음
