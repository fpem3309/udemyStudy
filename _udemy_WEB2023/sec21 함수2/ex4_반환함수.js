function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log('I AM A GOOD FUNCTION!');
    }
  } else {
    return function () {
      console.log('I AM A BAD FUNCTION!');
    }
  }
}



function isBetween(num) {
  return num >= 50 && num <= 100
}
function isBetween2(num) {
  return num >= 1 && num <= 10
}


// 팩토리 함수
function makeBetween(min, max) {
  return function (num) { // 이름없는 함수
    return num >= min && num <= max
  }
}

// 팩토리 함수로 여러 다른 함수를 반환
const isChild = makeBetween(0, 19)
const isAdult = makeBetween(20, 64)

isChild(10)
isAdult(10)