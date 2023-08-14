// async 자체가 함수를 비동기 함수로 선언하는 키워드
// 자동으로 Promise 반환

const sing = async () => {
  throw "UH OH"  // 오류면 Promise rejected
  return 'LA LA LA' // 반환 값이 있으면 Promise resolved
}


sing()
  .then(data => {
    console.log('PROMISE RESOLVED WITH:', data)
  })
  .catch(err => {
    console.log("OH NO, PROMISE REJECTED:", err)
  })


const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgifeetarecute') return 'WELCOME!'
  throw 'Invalid Password'  // 비밀번호 다를때 오류
}

login('kim','corgifeetarecute')
  .then(msg => {
    console.log("LOGGED IN!", msg)
  })
  .catch(err => {
    console.log("ERROR:", err)
  })