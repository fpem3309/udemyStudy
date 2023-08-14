const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(num => {
  return num === 4  // 리턴 값 새 배열 생성
})



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

const goodMovies = movies.filter(m => m.score > 90)
const badMovies = movies.filter(m => m.score <= 70)
const recentMovies = movies.filter(m => m.year > 2010)

// filter와 Map 한번에
const recentTitle = movies.filter(m => m.year > 2010).map(m => m.title)