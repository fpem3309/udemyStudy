// 모든 버튼 orange 클래스명 제거
// 누른 버튼에 orange 클래슴여 추가
// 모든 div show 클래스명 제거
// 해당 div에 show 클래스명 추가
var button = $('.tab-button')
var content = $('.tab-content')

for(let i = 0; i < 3; i++){

  button.eq(i).click(function(){
    button.removeClass('orange')
    button.eq(i).addClass('orange')
    content.removeClass('show')
    content.eq(i).addClass('show')
  })

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