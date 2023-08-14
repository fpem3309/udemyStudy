/* getElementById */

console.dir(document.getElementById('toc'));  // 요소들 확인 가능

console.log(document.getElementById('toc'));
console.log(document.getElementById('toc').tagName);  // 이렇게 요소 확인할 수 있음
console.dir(document.getElementById('toc').childElementCount);  // 이렇게 요소 확인할 수 있음



/* getElementsByTagName */

const allImages = document.getElementsByTagName('img')
console.log(allImages) // HTMLCollection 반환
console.log(allImages[0]) // 인덱스 사용가능

// 배열함수는 사용못하지만 반복문은 가능
for(let img of allImages){
  console.log(img.src)
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}



/* getElementsByClassName */
const squareImages = document.getElementsByClassName('square');

// 배열함수는 사용못하지만 반복문은 가능
for(let img of squareImages){
  console.log(img.src)
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg';
}