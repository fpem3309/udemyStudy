function sum(...nums) {
  console.log(nums) // 배열 생성
  return nums.reduce((total, el) => total + el);   // 배열 함수 사용가능
}

sum(1, 23, 43, 16) // 인수 갯수 상관x


// 응용
const raceResult = (gold, silver, ...every) =>{
  console.log(`GOLD MEDAL GOES TO: ${gold}`)
  console.log(`SILVER MEDAL GOES TO: ${silver}`)
  console.log(`AND THANKS TO EVERYONE ELESE: ${every}`)
}