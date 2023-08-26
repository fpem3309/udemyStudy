// rgb -> 16진수 색상
// function hex(r, g, b) {
//   return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}
rgb(255, 100, 25);


// 팩토리 함수
function makeColor(r, g, b) {
  const color = {}
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    console.log(this)
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
  color.hex = function () {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return color;
}

const firstColor = makeColor(25, 155, 255); // 각각 복사본
const secondColor = makeColor(25, 155, 255); // 각각 복사본
firstColor.rgb();
firstColor.hex();

// 함수는 참조타입 - ===을 사용해 true면 같은 함수를 가지고 있다는 건데
// false니 같은 함수를 참조하는게 아니라 복사본
console.log(firstColor.hex === secondColor.hex) // false
console.log('hi'.slice === 'bye'.slice) // true