/*  addEventListener  */
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
  alert('CLICKED');})


/*  일반 onclick과 addEventListener click의 차이  */
function twist(){
  console.log('twist')
}
function shout(){
  console.log('shout')
}
const tasBtn = document.querySelector('#tas');


// shout만 실행됨(나중것만)
tasBtn.onclick = twist;
tasBtn.onclick = shout;

// 둘다 실행됨
tasBtn.addEventListener('click', twist)
tasBtn.addEventListener('click', shout)

tasBtn.addEventListener('click', twist, {once : true})  // once 옵션을 true로하면 한번 실행한 후 이벤트리스너 삭제됨
