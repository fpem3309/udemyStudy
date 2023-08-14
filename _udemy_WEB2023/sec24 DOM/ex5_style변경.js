const h1 = document.querySelector('h1');
console.log(h1.style.color);  // 인라인 스타일로 지정하지않으면 빈문자열 ""로 출력됨

h1.style.color = 'green'; // style color 변경
h1.style.fontSize = '20px'; // camel case로 작성!!


const links = document.querySelectorAll('p a')  // p태그안의 a태그들(css 선택자처럼)
for (let link of links) {
  link.style.color = 'rgb(0, 108, 134)';
  link.style.textDecorationColor = 'magenta';
  link.style.textDecorationStyle = 'wavy';
}

console.log(window.getComputedStyle(h1).fontSize) // 계산된 style
