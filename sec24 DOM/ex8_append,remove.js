/* appendChild */
const newImg = document.createElement('img');  // 요소 생성
newImg.src = 'https://tpc.googlesyndication.com/simgad/10290309267698011370?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmW4odAeGWPetfUIQMgKf5AikkMEA'

document.body.appendChild(newImg);  // appendChild로 추가
newImg.classList.add('square');

const newH3 = document.createElement('h3');
newH3.innerText = 'I am new!'
document.body.appendChild(newH3);  // appendChild로 추가


/*append */
const p  = document.querySelector('p')
p.append('i am new Text Yaaaaaaaaaaayy', 'lololol')  // 2개이상도 가능, appendChild로하면 Node가 아니라고 오류남
p.prepend('Hi!')  // 맨앞에 추가


/* insertAdjacentElement */
const h2 = document.createElement('h2');
h2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend',h2); // h1 이후에 h2 추가
console.log(h1.nextElementSibling)  // 위의 h2


/* after */
const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h2.after(h3); // h2다음에 h3




/* removeChild */
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement  // 제거할 부모의 요소
ul.removeChild(firstLi);  // 요소 제거

// firstLi.parentElement.removeChild(firstLi) // 한줄로


/* remove*/
const img = document.querySelector('img')
img.remove()  // 선택한 요소를 제거
