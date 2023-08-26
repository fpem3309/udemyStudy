function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this);
  // this.rgb = function () {
  //   const { r, g, b } = this;
  //   return `rgb(${r},${g},${b})`;
  // }
}
Color(255, 40, 100);  // Color 생성자 함수의 this = Window

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
}
Color.prototype.hex = function () {
  const { r, g, b } = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

}
Color.prototype.rgba = function (a = 1.0) { // 기본값 1.0
  const { r, g, b } = this;
  return `rgba(${r},${g},${b},${a})`;

}
// 새로운 객체를 생성하고 this를 설정 
// 생성자를 객체나 다른 객체에 설정(Color 함수에 설정)
const color1 = new Color(255, 40, 100);  // 복사본 아님, Color 생성자 함수의 this = r,g,b
const color2 = new Color(0, 0, 0);  // 복사본 아님, Color 생성자 함수의 this = r,g,b

// 함수는 참조타입 - ===을 사용해 true면 같은 함수를 가지고 있다는 건데
// true 같은 함수를 참조 아니라 복사본 X
console.log(color1.hex === color2.hex) // true

// document.body.style.backgroundColor = color1.rgba()
document.body.style.backgroundColor = color1.rgba(0.5)