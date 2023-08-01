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

fackRequestPromise('abc.com/api/coffee/page1')
  .then(() => { // resolved
    console.log('IT WORKED!!! (page1)')

    fackRequestPromise('abc.com/api/coffee/page2')
      .then(() => {
        console.log('IT WORKED!!! (page2)')

        fackRequestPromise('abc.com/api/coffee/page3')
          .then(() => {
            console.log('IT WORKED!!! (page3)')
          }).catch(() => {
            console.error("ERROR!! (page3)")
          })

      }).catch(() => {
        console.error("ERROR!! (page2)")
      })

  }).catch(() => { // rejected
    console.error("ERROR!! (page1)")
  })