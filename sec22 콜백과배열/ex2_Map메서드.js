const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map - 콜백의 반환 값을 이용해 새로운 배열 생성
const doubles = numbers.map(function (number) {
  return number * 2; // 새 배열 생성,리턴
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


// Map을 이용해 영화제목만 있는 배열 생성
const movieTitle = movies.map(function (movie) {
  return movie.title.toUpperCase() + '!!';
})
