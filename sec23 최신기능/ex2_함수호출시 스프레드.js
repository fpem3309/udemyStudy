Math.max(12, 14, 51, 16, 173, 1, 377, 137, 16)  // 377

const nums = [12, 14, 51, 16, 173, 1, 377, 137, 16];
Math.max(nums)  // NaN, 배열이 아닌 숫자 하나씩 넣어야함

Math.max(...nums); // 377

console.log(..."hello") // h e l l o, 문자열도 가능
console.log('h', 'e', 'l', 'l', 'o')  // h e l l o