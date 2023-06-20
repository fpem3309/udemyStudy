// narrowing - typeof, in, instanceof


function uni(x: number | string) {
  if (typeof x === 'number') {   // Narrowing 해주기
    return x + 1;
  } else {
    return x + '는 숫자아님';
  }
}



// assertion
function uni2(x: number | string) {
  let arr: number[] = [];

  arr[0] = x as number;   // x가 number타입이 됨, 무슨 타입일지 확실할 때 사용하기!

}


function Subject(sub: { subject: string | string[] }): string {
  if (typeof sub.subject === 'string') {
    return sub.subject;
  } else if (Array.isArray(sub.subject)) {
    return sub.subject[sub.subject.length - 1];
  }else{
    return '뭐임';
  }
}
console.log(Subject({ subject: ['english', 'art'] }))