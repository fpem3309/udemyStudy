// setTimeout(() => {
//   document.body.style.backgroundColor = 'red'
//   setTimeout(() => {
//     document.body.style.backgroundColor = 'orange'
//     setTimeout(() => {
//       document.body.style.backgroundColor = 'yellow'
//     }, 1000)
//   }, 1000)
// }, 1000)


const delayColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor
    doNext && doNext()
  }, delay)
}

delayColorChange('red', 1000, () => {
  delayColorChange('orange', 1000, () => {
    delayColorChange('yellow', 1000, () => {
      delayColorChange('green', 1000, () => {
        delayColorChange('blue', 1000, () => {

        })
      })
    })
  })
})



// 예시) 영화API 콜백
searchMoviesAPI('amadeus', () => {
  saveToMyDB(movies, () => {
    // if it works, run this
  }, () => {
    // if it doesn't work, run this
  })
})