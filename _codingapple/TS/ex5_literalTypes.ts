// 더 엄격하게 지정

let phone_first: '010' | '011';
phone_first = '010';


function func(a :'hello') :1|0{
  return 1
}
func('hello')


function rsp(x:'가위'|'바위'|'보'):('가위'|'바위'|'보')[]{
  return ['가위']
}
rsp('보')


var data = {
  name:'kim'
} as const  // object value값을 그대로 타입으로 지정, 모두 readonly 붙임

function myFunc(a:'kim'){

}

myFunc(data.name)