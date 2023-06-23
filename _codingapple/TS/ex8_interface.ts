interface Square {  // class 만드는거랑 비슷
  color: string,
  width: number
}

let nemo: Square = { color: 'black', width: 100 }



// extends 가능(중복 O - 합쳐짐)
interface Studnent {
  name: string
}

// interface Studnent { // 중복 선언 - 외부라이브러리 수정할 때 많이 사용
//   score: number
// }

interface Teacher extends Studnent {  // 중복 속성 미리 에러
  age: number
}

// type alias로 extends랑 비슷하게 가능(중복 X)
type Animal = { name: string }
type Cat = { age: number } & Animal // 중복 속성 미리 에러 안남


let stu: Studnent = { name: 'kim' }
let tea: Teacher = { name: 'kim', age: 30 }



// 문제1
interface Product {
  brand: string,
  serialNumber: number,
  model: string[]
}
let pro: Product = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] }



// 문제2
interface Cart {
  product: string,
  price: number
}
let cart: Cart[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }]



// 문제3
interface Cart2 extends Cart {
  card: boolean
}



// 문제4
interface Obj {
  plus: (a: number, b: number) => number
  minus: (a: number, b: number) => number
}

let obj1: Obj = {
  plus(a: number, b: number) {
    return a + b
  },
  minus(a: number, b: number) {
    return a - b
  }
}
