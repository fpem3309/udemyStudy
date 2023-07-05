// 짝수 출력 예제
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 100부터 10씩 감소
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}


// 배열 루프
const animals = ['dog', 'cat', 'lion', 'wolf'];
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// 배열 루프 거꾸로
for (let i = animals.length - 1; i >= 0; i--) {
  console.log(i, animals[i]);
}


/* 중첩 루프 */
for (let i = 1; i <= 10; i++) {
  console.log(`i is ${i}`);
  for (let j = 1; j < 4; j++) {
    console.log(`     j is ${j}`);
  }
}

const seatinChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatinChart.length; i++) {
  console.log(`ROW #${i + 1}`)
  for (let j = 0; j < seatinChart[i].length; j++) {
    console.log(seatinChart[i][j])
  }
}