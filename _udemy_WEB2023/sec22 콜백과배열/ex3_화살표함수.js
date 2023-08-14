/* 화살표 함수 개요 */

// 인수가 있는 화살표 함수
const add = (x, y) => {
  console.log(x + y);
}

// 인수가 1개면 괄호 생략가능
const sqaure = x => {
  console.log(x * x);
}


// 인수가 없는 화살표 함수
const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1
}



/* 화살표 함수 반환 */

// 암시적 반환 - 표현식이 하나일때 중괄호->소괄호로 변경, return키워드 삭제
const rollDie2 = () => (
  Math.floor(Math.random() * 6) + 1
)

// 소괄호도 없이 한줄로도 가능
const add2 = (x, y) => x + y