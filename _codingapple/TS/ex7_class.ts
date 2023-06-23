class Personclass {
  lastName: string; // 여기서 지정해야함
  constructor(lastName: string = 'default') { // 생성자 타입 지정 가능, return 타입은 object라서 지정안해도 됨, rest파라미터 default파라미터 가능
    this.lastName = lastName
  }

  personFn(a: string) { // prototype함수는 여기에 지정, 타입 지정 가능
    console.log('Hi ' + a + '!!')
  }
}

let man1 = new Personclass('kim')
let man2 = new Personclass('park')
let man3 = new Personclass()

console.log(man1, man2, man3)
man1.personFn('min')



// 문제1  함수사용
class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model
    this.price = price
  }
  tax():number{
    return this.price*0.1
  }
}

let car1 = new Car('소나타',3000)
console.log(car1)
console.log(car1.tax())


// 문제2  rest파라미터사용
class Word{
  num:number[] = [];
  str:string[] = [];
  constructor(...words:(number|string)[]){
    words.forEach((i)=>{
      if(typeof i === 'number'){
        this.num.push(i)
      }else if(typeof i=== 'string'){
        this.str.push(i)
      }
    })
  }
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park']