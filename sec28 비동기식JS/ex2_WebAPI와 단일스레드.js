// JS는 단일스레드
console.log('Sending request to server')

setTimeout(() => {  // Web Api가 처리(3초 기다림) -> 콜백 큐 -> 콜 스택
  console.log('Here is your data from the server...')
}, 3000)

console.log('I AM AT THE END OF TH FILE')