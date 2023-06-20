/**
 * 기본 타입
 */
let userName: string = 'Kim';
let age: number = 20;
let marry: boolean = false;

let members: string[] = ['kim', 'park']
let members2: { member1: string, member2: string } = { member1: 'kim', member2: 'park' }


let project: { member: string[], days: number, started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}


/**
 *  Union type, any, unknown
 */

// Union
let mem: number | string | boolean = 123;
let mems: (number | string)[] = [1, 2, 3, 'kim', 'park'];
let mems2: { a: string | number } = { a: 'kim' };

// any - 타입 해제됨
let usrName: any;
usrName = 123;
usrName = [];

// Unknown - any보다 안전
let urName: unknown;
urName = 123;
urName = {};

// let tt:string = urName   - unknown타입은 string이 아니라 타입 에러 발생, any는 에러발생x


let val1: string | number;
// val1 +1;   - 엄격, string,number 모두 +1연산 가능 -> string|number는 새로운 타입이라 에러


let user1: string = 'kim';
let age1: number | undefined = undefined;
let married1: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user1, age1, married1];


let 학교: { score: (number | boolean)[], teacher: string, friend: string | string[] } = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]