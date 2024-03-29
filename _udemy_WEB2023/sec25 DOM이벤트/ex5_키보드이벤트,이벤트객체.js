document.querySelector('#eBtn').addEventListener('click', function (e) {
  console.log(e)
})

/* input에 커서둔 채로 keydown */
const input = document.querySelector('#eInput');
input.addEventListener('keydown', function (e) {
  console.log(e.key)
  console.log(e.code)
})

/* window창에서 keydown */
window.addEventListener('keydown', function (e) {
  switch (e.code) {
    case 'ArrowUp':
      console.log('UP!');
      break;
    case 'ArrowDown':
      console.log('DOWN!');
      break;
    case 'ArrowLeft':
      console.log('LEFT!');
      break;
    case 'ArrowRight':
      console.log('RIGHT!');
      break;
    default:
      console.log("IGNORED!");
  }
})