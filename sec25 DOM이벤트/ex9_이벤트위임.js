const form = document.querySelector('form');
const input = document.querySelector('#username');
const input2 = document.querySelector('#tweet');
const list = document.querySelector('#ul');

form.addEventListener('submit', function (e) {

  e.preventDefault();

  const username = input.value;  // input에 작성한 텍스트
  const tweet = input2.value;  // input2에 작성한 텍스트

  const newLi = document.createElement('li');
  newLi.innerText = username + '-' + tweet;

  list.append(newLi); // list에 추가
  input.value = ''; // input 비우기
  input2.value = ''; // input2 비우기
})


// 새로 추가된 li는 삭제 안됨

// const lis = document.querySelectorAll('li')
// for (let li of lis) {
//   li.addEventListener('click', function () {
//     li.remove()
//   })
// }


// 부모에게 이벤트 수신기를 위임 - 추가된 li도 삭제가능해짐
const ul = document.querySelector('ul');
ul.addEventListener('click', function (e) {
  console.log(e)  // e.target = li
  console.log(e.target.nodeName)
  e.target.nodeName === 'LI' && e.target.remove();
})