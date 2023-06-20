// 더 엄격하게 지정
var phone_first;
phone_first = '010';
function func(a) {
    return 1;
}
func('hello');
function rsp(x) {
    return ['가위'];
}
rsp('보');
var data = {
    name: 'kim'
}; // object value값을 그대로 타입으로 지정, 모두 readonly 붙임
function myFunc(a) {
}
myFunc(data.name);
