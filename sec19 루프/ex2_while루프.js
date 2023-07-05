let count = 0;
while (count < 10) {
  count++;
  console.log(count)
}


// 암호 맞을 때 까지 while 루프
const SECRET = "baby";

let guess = prompt("Enter your secret code..")
while (guess !== SECRET) {
  guess = prompt("Enter your secret code..")  // 다르면 무한 반복
}
console.log("CONGRATS YOU GOT THE SECRET!") // 같을 때


// break 키워드
let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === 'stop') break;
}
console.log("OK YOU WIN") // break 되면 실행
