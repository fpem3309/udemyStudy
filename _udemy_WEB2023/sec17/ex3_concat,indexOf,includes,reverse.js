// 두 개의 배열을 합쳐 새로운 배열(업데이트x)
let cats = ['blue', 'kitty']
let dogs = ['rusty', 'wyatt']

let catsNdogs = cats.concat(dogs)


// 요소가 배열에 있는지 찾기
cats.includes('blue') // true
cats.includes('rusty') // false


// 인덱스 위치 찾기
"Blue".indexOf('B') // 0
"Blue".indexOf('e') // 3
"Blue".indexOf('a') // -1 (해당 문자 없으면 -1 리턴)

catsNdogs.indexOf('rusty')  // 2


// 문자열 뒤집기
catsNdogs.reverse() // 원본을 업데이트
