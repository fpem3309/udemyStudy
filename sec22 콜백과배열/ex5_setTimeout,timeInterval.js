console.log('Hello!')

setTimeout(() => {
  console.log('...are you still there?')
}, 3000)

console.log('Good bye!')


id = setInterval(() => {  // id 반환
  console.log(Math.random())
}, 2000)

// clearInterval(id)  // 반환한 id로 Interval 멈추기