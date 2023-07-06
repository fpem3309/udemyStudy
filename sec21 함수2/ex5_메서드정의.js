// 메서드 = 객체에 속성으로 추가된 함수

// const myMath = {
//   PI: 3.14159,
//   square: function (num) {
//     return num * num;
//   },
//   cube: function (num) {
//     return num ** 3;
//   }
// }

// 속기법
const myMath = {
  PI: 3.14159,
  square(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  }
}