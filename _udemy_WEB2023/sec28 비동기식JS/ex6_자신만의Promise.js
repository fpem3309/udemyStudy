const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('YOUR FAKE DATA HERE')
      } else {
        reject('REQUEST Error')
      }

    }, 1000)
  })
}

fakeRequest('/dog/1')
  .then((data) => {
    console.log("DONE WITH REQUEST!")
    console.log('data is', data)
  })
  .catch((err) => {
    console.log('OH NO', err)
  })


// 배경색 바꾸기 Promise버전
const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve();
    }, delay)
  })
}

delayedColorChange('red', 500)
  .then(() => delayedColorChange('orange', 600))
  .then(() => delayedColorChange('yellow', 700))
  .then(() => delayedColorChange('green', 800))
  .then(() => delayedColorChange('blue', 900))
  .then(() => delayedColorChange('Indigo', 1000))
  .then(() => delayedColorChange('violet', 1100))