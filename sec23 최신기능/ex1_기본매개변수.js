// function rollDie(numSiedes) {
//   if (numSiedes === undefined) {  // 인수 입력안했을때 디폴트 값 지정
//     numSiedes = 6;
//   }
//   return Math.floor(Math.random() * numSiedes) + 1;
// }

function rollDie(numSiedes = 6) { // 인수 입력안했을때 디폴트 값 지정
  return Math.floor(Math.random() * numSiedes) + 1;
}

function greet(person, msg = 'Hey there', punc = '!') { // 디폴트 매개변수 순서는 맨 뒤로
  return `${msg}, ${person}${punc}`;
}