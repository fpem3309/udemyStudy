/*
객체 생성, 액세스
 */

const person = { firstName: 'Mingwan', lastName: 'Kim' };
const kitchenSink = {
  favNum: 9152632,
  isFunny: true,
  colors: ['red', 'green']
}

// 객체리터럴 값 꺼내기
person['firstName']
person.lastName

const year = { 1998: 'HAPPY' }
year['1998']
year[1998]  // 키를 문자열로 바꿔줌

const dumb = { true: 'dat', null: 'abc' }
dumb[true]  // 키를 문자열로 바꿔줌
dumb.null  // 키를 문자열로 바꿔줌


// 대괄호는 dot방식과 다르게 표현식을 넣을 수 있음
dumb['nu' + 'll']

// 대괄호는 변수에 넣어 사용할 수 있음
const myBirth = 1998
year[myBirth]



/*
객체 수정
 */

const midterms = { danielle: 96, thomas: 78 }
midterms['danielle'] = 98
midterms.thomas = 88


/* 배열과 객체 네스트 구성 */
const comments = [
  { name: 'Tammy', text: 'lololol', votes: 9 },
  { name: 'FishBoi', text: 'glub glub', votes: 123 }
]

comments[0].text
comments[1]['votes']