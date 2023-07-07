const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function printNumber(element) {
//   console.log(element)
// }
// numbers.forEach(printNumber)


numbers.forEach(function printNumber(element) {
  if (element % 2 === 0) {
    console.log(element)
  }
})

const movies = [
  {
    title: 'Harry Potter',
    score: 100
  },
  {
    title: 'Coco',
    score: 90
  },
  {
    title: 'About time',
    score: 99
  },
  {
    title: 'Titanic',
    score: 95
  }
]

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`)
})