/* 함수 범위 */

function collectEggs() {
  let totalEggs = 5;  // 여기서 정의하면 범위가 함수 안으로 제한
}
// console.log(totalEggs)  // NOT DEFINED!


let bird = 'Scarlet Macaw';
function birdWatch() {
  let bird = 'Great Blue Heron';
  console.log(bird);  // 함수 안의 bird 출력
}
birdWatch();
console.log(bird);  // 전역변수 bird 출력



/* 블록 범위 */

let radius = 8;
if (radius > 0) {
  const PI = 3.14159; // 블록 범위
  let msg = 'HI!';    // 블록 범위
}
console.log(radius);
//  console.log(PI);  // NOT DEFINED!


for (let i = 0; i < 5; i++) { // let, const 변수는 범위가 블록으로 지정
  let msg = 'let msg';
}
//  console.log(msg) // NOT DEFINED!

for (var i = 0; i < 5; i++) { // var 변수는 범위가 함수로 지정
  var msg = 'var msg'; // var 변수는 범위가 함수로 지정
}
console.log(msg)
console.log(i)



/* 렉시컬 범위 */

function bankRobbery() {
  const heroes = ['Spiderman', 'Ironman', 'Thor', 'Black Panther'];

  function cryForHelp() {
    for (let hero of heroes) {  // 중첩된 내부 함수는 상위 함수의 항목에 엑세스 가능
      console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
    }
  }
  cryForHelp();
}