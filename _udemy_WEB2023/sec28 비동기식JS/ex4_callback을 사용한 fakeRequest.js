const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection TimeOut :(')
    } else {
      success(`Here is your fake data from ${url}`)
    }
  }, delay)
}

fakeRequestCallback('books.com/page1',
  function (response) {
    console.log('IT WORKED!!!', response)

    fakeRequestCallback('books.com/page2',
      function (response) {
        console.log('IT WORKED AGAIN!!!', response)

        fakeRequestCallback('books.com/page3',
          function (response) {
            console.log('IT WORKED AGAIN (3rd req)!!!', response)
          }, function (err) {
            console.log('ERROR (3nd req)!!!', err)

          })

      }, function (err) {
        console.log('ERROR (2nd req)!!!', err)
      })

  }, function (err) {
    console.log('ERROR!!!', err)
  })