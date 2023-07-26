const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e){
  
  // 특정 이벤트의 기본 동작 막기(여기선 폼제출)
  e.preventDefault();

  const catName = input.value;  // input에 작성한 텍스트
  const newLi = document.createElement('li');
  newLi.innerText = catName;

  list.append(newLi); // list에 추가
  input.value = ''; // input 비우기
})