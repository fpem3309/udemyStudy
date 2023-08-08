const fackRequestPromise = (url) => {
  return new Promise((resolve, reject) => { // resolve = 성공, reject = 실패, pending = 대기중
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection TimeOut :(')
      } else {
        resolve(`Here is your fake data from ${url}`)
      }
    }, delay)
  })
}

// fackRequestPromise('abc.com/api/coffee/page1')
//   .then(() => { // resolved
//     console.log('IT WORKED!!! (page1)')

//     fackRequestPromise('abc.com/api/coffee/page2')
//       .then(() => {
//         console.log('IT WORKED!!! (page2)')

//         fackRequestPromise('abc.com/api/coffee/page3')
//           .then(() => {
//             console.log('IT WORKED!!! (page3)')
//           }).catch(() => {
//             console.error("ERROR!! (page3)")
//           })

//       }).catch(() => {
//         console.error("ERROR!! (page2)")
//       })

//   }).catch(() => { // rejected
//     console.error("ERROR!! (page1)")
//   })


// 콜백안에서 Promise를 반환
fackRequestPromise('abc.com/api/coffee/page1')
  .then((data) => {
    console.log('IT WORKED!!! (page1)')
    console.log(data)
    return fackRequestPromise('abc.com/api/coffee/page2') // Promise를 반환
  })
  .then((data) => {
    console.log('IT WORKED!!! (page2)')
    console.log(data)
    return fackRequestPromise('abc.com/api/coffee/page3') // Promise를 반환
  })
  .then((data) => {
    console.log('IT WORKED!!! (page3)')
    console.log(data)
  })
  .catch((err) => { // 몇번째던지 실패시 여기로 바로
    console.error("REQUEST FAILED!!")
    console.log(err)
  })