// 모든 버튼 orange 클래스명 제거
// 누른 버튼에 orange 클래슴여 추가
// 모든 div show 클래스명 제거
// 해당 div에 show 클래스명 추가

var button = $('.tab-button')
var content = $('.tab-content')
var length = button.length; // 선택자 수 구하기 ( 확장성 )

// for(let i = 0; i < length; i++){
//   button.eq(i).click(function(){
//     openTab(i);
//   })
// }

$('.list').click(function(e){
  console.log(parseInt(e.target.dataset.id))  // 정확하게 숫자로 변환
    openTab(parseInt(e.target.dataset.id))
})

function openTab(tabNum) {
  button.removeClass('orange');
  button.eq(tabNum).addClass('orange');
  content.removeClass('show');
  content.eq(tabNum).addClass('show');
}

// button.eq(0).click(function(){
//   button.removeClass('orange')
//   button.eq(0).addClass('orange')
//   content.removeClass('show')
//   content.eq(0).addClass('show')

// })
// button.eq(1).click(function(){
//   button.removeClass('orange')
//   button.eq(1).addClass('orange')
//   content.removeClass('show')
//   content.eq(1).addClass('show')
// })
// button.eq(2).click(function(){
//   button.removeClass('orange')
//   button.eq(2).addClass('orange')
//   content.removeClass('show')
//   content.eq(2).addClass('show')
// })