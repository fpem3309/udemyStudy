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

// map 요약
const myMovies = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`
})

const myMovies2 = movies.map(movie => (
  `${movie.title} - ${movie.score / 10}`
))