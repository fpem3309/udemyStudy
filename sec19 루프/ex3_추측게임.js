let maximum = parseInt(prompt("Enter the maximum number"));

while (!maximum) { // NaN아닌 유효한 정수값 입력할때 까지 무한 반복
  maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;  // 1 ~ 최대숫자 사이의 난수 생성
console.log(targetNum)


let guess = prompt("Enter your first guess! (Type 'q' to quit)10"); // 첫번째 도전
let attempts = 1;

while (parseInt(guess) !== targetNum) { // 맞추지 못할 때
  if (guess === 'q') break;

  guess = parseInt(guess); // 입력값 q가 아닐때 정수로 변환
  if (guess > targetNum) {
    guess = prompt("Too high! enter a new guess")
    attempts++; // 시도횟수 추가
  } else if (guess < targetNum) {
    guess = prompt("Too low! enter a new guess")
    attempts++; // 시도횟수 추가
  } else {  // NaN 잘못된 값
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
}

// while문 빠져나옴
if (guess === 'q') {
  console.log('OK, YOU QUIT');  // q로 while문 빠져나오면
} else {
  console.log(`YOU GOT IT! It took you ${attempts} guesses`) // 맞춰서 while문 빠져나오면
}