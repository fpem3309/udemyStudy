const btnRC = document.querySelector('#random_color');

btnRC.addEventListener('click', function () {
  const newColor = randomColor();

  document.querySelector('#back_color').innerText = newColor;
  document.body.style.backgroundColor = newColor;
})

const randomColor = () =>{
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`
}