const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`
}

const buttons = document.querySelectorAll('#buttons button');
for (let button of buttons) {
  // button.addEventListener('click', function () {
  //   button.style.backgroundColor = randomColor();
  //   button.style.color = randomColor();
  // })
  button.addEventListener('click', colorsize)

}
const h1s = document.querySelectorAll('#buttons h1');

for (let h1 of h1s) {
  // h1.addEventListener('click', function () {
  // h1.style.backgroundColor = randomColor();
  // h1.style.color = randomColor();
  // })
  h1.addEventListener('click', colorsize)
}


/* this키워드 사용 */
function colorsize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}