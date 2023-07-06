/* 인수 1개 */
function greet(name) {
  console.log(`Hi! ${name}`);
}

greet('Tom')


/* 인수 2개이상 */
function greet2(name, count) {  // 인수 1개를 넣지 않는다고 꼭 오류나지 x, 인수가 코드에 이용되야하면 오류발생 o
  let str = ''
  for (let i = 0; i < count; i++) {
    str += `Hi! ${name} ${i}  `
  }
  console.log(str)
}
greet2('Tom', 2)


// return 키워드 - 함수 값을 반환해 저장
function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;  // 함수 중단
  }
  return x + y  // 함수 중단
  console.log("END OF ADD FUNCTION"); // return 키워드 이후로 코드 실행x
}