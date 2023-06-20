/**
 * 기본 타입
 */
var userName = 'Kim';
var age = 20;
var marry = false;
var members = ['kim', 'park'];
var members2 = { member1: 'kim', member2: 'park' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
/**
 *  Union type, any, unknown
 */
// Union
var mem = 123;
var mems = [1, 2, 3, 'kim', 'park'];
var mems2 = { a: 'kim' };
// any - 타입 해제됨
var usrName;
usrName = 123;
usrName = [];
// Unknown - any보다 안전
var urName;
urName = 123;
urName = {};
// let tt:string = urName   - unknown타입은 string이 아니라 타입 에러 발생, any는 에러발생x
var val1;
// val1 +1;   - 엄격, string,number 모두 +1연산 가능 -> string|number는 새로운 타입이라 에러
var user1 = 'kim';
var age1 = undefined;
var married1 = false;
var 철수 = [user1, age1, married1];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
