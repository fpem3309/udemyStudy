/*
slice (복사본을 만듦)
*/

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

colors.slice()
colors.slice(2) // 1개 적으면 시작점
colors.slice(2, 3) // 2개 적어서 시작과 끝 정할 수 있음

// 음수로 배열의 끝에서부터 시작
colors.slice(-3)  // 마지막 3개 가져오기



/*
splice (원본을 업데이트)
*/

// 삭제
colors.splice(2,1)  // 해당 인덱스, 개수만큼 제거

// 추가
colors.splice(2, 0, 'yellow') // 해당 인덱스, 제거x, 추가할 값
colors.splice(1,0,'red-orange','LOL') //