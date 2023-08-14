const btn = document.querySelector('#v2');
console.dir(btn); // 특성

/* onclick */
btn.onclick = function(){
  console.log("You clicked me JS")
}


/* mouseenter */
function scream(){  // 함수를 미리 지정
  console.log('AAAAAAHHHH');
}
btn.onmouseenter = scream;