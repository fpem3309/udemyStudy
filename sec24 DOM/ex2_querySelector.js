/* querySelector */

const pTag = document.querySelector('p')  // 여러개 있어도 첫번째 하나만 선택
console.log(pTag);

console.log(document.querySelector('#banner'))  // id로 선택
console.log(document.querySelector('.square'))  // class로 선택
console.log(document.querySelector('img:nth-of-type(3)'))  // n번째 선택 가능하긴 함
console.log(document.querySelector('a[title="Java"]'))  // 타입과 속성으로 선택



/* querySelectorAll */

const pTags = document.querySelectorAll('p')  // 일치하는 태그 모두 선택
console.log(pTags);


const links = document.querySelectorAll('p a')  // p태그안의 a태그들(css 선택자처럼)

// 배열함수는 사용못하지만 반복문은 가능
for(let img of links){
  console.log(img.href)
}