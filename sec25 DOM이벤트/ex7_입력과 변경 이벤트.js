const input = document.querySelector('#cInput');
const h1 = document.querySelector('#cH1');

input.addEventListener('change', function (e) { // input에서 blur(변경)될때 실행
  console.log(input.value)
})

input.addEventListener('input', function (e) { // input에서 input될때마다 실행
  console.log(input.value)
  h1.innerText = input.value
})