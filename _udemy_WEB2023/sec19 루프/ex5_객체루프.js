const scores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97
}

/* for ~ in */
for (let person in scores) {
  console.log(`${person} scored ${scores[person]}`)
}


/*
Object.keys - key들 배열로 반환
Object.values - value들 배열로 반환
Object.entries - key,value 배열로 반환
*/

let total = 0;
let sc = Object.values(scores) // value값이 배열로
for (let score of sc) { // 배열이니까 for of문으로 출력
  console.log(score)
  total += score;
}
console.log(total, total / sc.length);  // 배열이여서 length가능