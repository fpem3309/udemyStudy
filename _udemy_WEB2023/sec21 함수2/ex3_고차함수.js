function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 5) + 1;
  console.log(roll);
}

callTwice(rollDie)  // callTwice 함수의 인자로 roollDie를 넣기