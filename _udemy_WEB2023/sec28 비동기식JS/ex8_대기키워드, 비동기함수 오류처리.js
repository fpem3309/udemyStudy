const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color
      resolve();
    }, delay)
  })
}


async function rainbow() {
  await delayedColorChange('red', 500)  // Promise가 해결될 떄까지 정지, Promise를 반환
  await delayedColorChange('orange', 600)
  await delayedColorChange('yellow', 700)
  await delayedColorChange('green', 800)
  await delayedColorChange('blue', 900)
  await delayedColorChange('Indigo', 1000)
  await delayedColorChange('violet', 1100)
  return 'ALL DONE!'
}

// rainbow().then(() => console.log("END OF RAINBOW"))

async function printRainbow() {  // 이렇게 프로미스를 반환하는 비동기 함수로 만들수도 있음(위랑 같은 결과)
  await rainbow();
  console.log("END OF RAINBOW")
}
printRainbow()




// ----- 비동기함수 오류처리 -----
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

async function makeTowRequest() {
  try {  // 실패하면 data에 값이 저장 안돼서 try-catch사용
    let data1 = await fakeRequest('/dog/1');
    let data2 = await fakeRequest('/dog/2');
    console.log(data1)
    console.log(data2)
  } catch (e) {
    console.log('CAUGHT AN ERROR')
    console.log("error is:", e)
  }

}
