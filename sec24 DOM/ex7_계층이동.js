const firstBold = document.querySelector('b')

console.log(firstBold.parentElement)  // 부모
console.log(firstBold.parentElement.parentElement)  // 부모의 부모


const paragraph = firstBold.parentElement
paragraph.children  // 자식, 배열메소드는 안되지만 반복 가능
paragraph.childElementCount // 자식 수


const squareImg = document.querySelector('.square')
squareImg.previousSibling // 이전 텍스트 노드 반환(공백, 토스트)
squareImg.nextSibling // 이후 노드 반환(공백, 토스트)

squareImg.previousElementSibling // 이전 형제 요소
squareImg.nextElementSibling // 다음 형제 요소