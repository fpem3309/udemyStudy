
try {
  hi.toUpperCase();
} catch { // try 예외 발생하면 실행
  console.error('error')
}

console.log('atter Try/Catch')  // try catch 사용안하고 오류발생하면 실행안됨



function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3)); // 파라미터가 문자열이 에러 -> try catch 사용
  } catch (e) {
    // console.log(e)
    console.log('Please pass a string next time')
  }
}