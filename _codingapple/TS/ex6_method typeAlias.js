// 함수표현식
var myFunc2 = function () {
    return 1;
};
// object 안에 함수 타입 지정
var userInfo = {
    name: 'kim',
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function (b) { }
};
userInfo.plusOne(1);
var cutZero = function (a) {
    return a.replace(/^0+/, '');
};
var removeDash = function (a) {
    return parseInt(a.replace(/-/g, ''));
};
function test3(a, b, c) {
    console.log(c(b(a)));
}
test3('010-1111-2222', cutZero, removeDash);
