const exams = [80, 98, 81, 78, 77, 90, 89, 84, 81, 74];

exams.every(score => score > 75)  // 하나라도 false면 false

exams.some(score => score > 97)  // 하나라도 true면 true



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

movies.some(movie => movie.year > 2015)  // 2015년 이후 영화가 있는지?


const allEvens = (num => num.every(n => n % 2 == 0))  // 인수 배열의 요소들이 다 짝수인지?
allEvens([2, 4, 6, 8]) //true
allEvens([1, 4, 6, 8]) //false
allEvens([1, 2, 3]) //false