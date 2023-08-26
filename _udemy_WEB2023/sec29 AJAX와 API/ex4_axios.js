// axios.get('https://swapi.dev/api/people/1')  // promise 반환
//   .then(res => {
//     console.log('response', res)
//   })
//   .catch(e => {
//     console.log('error', e)
//   })


// // 비동기 함수 axios
// const getStarWarsPerson = async (id) => {
//   try{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`);
//     console.log(res.data)
//   }catch(e){
//     console.log('ERROR', e)
//   }
// }
// getStarWarsPerson(1)
// getStarWarsPerson(10)


const jokes = document.querySelector('#jokes');
const button = document.querySelector('#btn_joke')

const newJoke = async () => {
  const jokeText = await getDadJoke()
  // li에 추가 후 ul에 추가
  const newLi = document.createElement('li');
  newLi.append(jokeText);
  jokes.append(newLi);
}
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };  // axios header세팅
    const res = await axios.get('https://icanhazdadjoke.com', config);
    return res.data.joke;
  } catch (e) {
    return 'NO JOKES AVAILABLE SORRY :(';
  }
}

button.addEventListener('click', function () {
  newJoke();
})