const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
const movies = [
  {
    title: 'Harry Potter',
    score: 100,
    year: 2001
  },
  {
    title: 'Coco',
    score: 90,
    year: 2017
  },
  {
    title: 'About time',
    score: 99,
    year: 2013
  },
  {
    title: 'Titanic',
    score: 85,
    year: 1998
  },
  {
    title: 'Alien',
    score: 70,
    year: 1979
  }
]

// reduce 사용
let total = 0;
for (let price of prices) {
  total += price
}
console.log(total); //  111.97


// const reTotal = prices.reduce((total, price) => {  // 축적, 개별요소
//   return total + price;
// })

const reTotal = prices.reduce((total, price) => total * price)
console.log(reTotal); //  111.97


// 최솟값 찾기
const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
})


// 최대평점
const maxStar = movies.reduce((max, movie) => {
  return movie.score > max ? movie.score : max
})


// reduce의 2번째 파라미터로 accumulator의 초기값을 지정
const events = [2, 4, 6, 8];
const eventSum = events.reduce((sum, num) => sum + num) // 20
const eventSum2 = events.reduce((sum, num) => sum + num, 100) // 120
