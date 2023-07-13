const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs]; // 전개하며 복사
allPets.push('Speedy');

console.log(allPets);
console.log(cats) // cats값은 변하지 않았음


console.log([..."hello"]) // 이렇게 사용가능