const myltiply = (x, y) => x * y;

const square = x => myltiply(x, x);

const isRightTriangle = (a, b, c) => (
  square(a) + square(b) === square(c)
)

console.log('before')
isRightTriangle(3, 4, 5)
console.log('after')