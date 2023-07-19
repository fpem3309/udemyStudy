const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function(e){
  console.log('submit')
  
  // 특정 이벤트의 기본 동작 막기
  e.preventDefault();
})