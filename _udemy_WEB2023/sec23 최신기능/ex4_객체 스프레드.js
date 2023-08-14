const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const newFeline = { ...feline, color: 'black' } // 복사

const catDog = { ...feline, ...canine };  // 전개하며 복사 - family 충돌 발생 - 나중의 family로(Caninae)

console.log({...[1,2,3,4]}) // 인덱스가 key가 됨
console.log({..."HIIII"}) // 인덱스가 key가 됨