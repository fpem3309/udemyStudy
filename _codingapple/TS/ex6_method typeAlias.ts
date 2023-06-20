// method type alias
type MethodType = (a: string) => number;


// 함수표현식
let myFunc2: MethodType = function () {
  return 1
}


// object 안에 함수 타입 지정
let userInfo = {
  name: 'kim',
  plusOne(a: number) {
    return a + 1
  },
  changeName: (b: void) => { }
}

userInfo.plusOne(1);



// test2

type mType = (a: string) => string;

let cutZero: mType = function (a) {
    return a.replace(/^0+/,'');
}

let removeDash = function (a: string):number {
  return parseInt(a.replace(/-/g, ''));
}


// test3

type funcType1 = (a: string) => string;
type funcType2 = (a: string) => number;

function test3(a: string, b: funcType1, c: funcType2) {
  console.log(c(b(a)))
}

test3('010-1111-2222',cutZero,removeDash);
