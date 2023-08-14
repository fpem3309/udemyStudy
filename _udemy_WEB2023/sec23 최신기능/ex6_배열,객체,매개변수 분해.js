/* 배열 분해 */
const scores = [99, 87, 71, 63, 65, 49, 19];

const [gold, silver, bronze, ...everyoneElse] = scores;  // 첫 번째 값, n번째 값, 나머지(전개연산자)



/* 겍체 분해 */
const user = {
  email: 'abc123@gmail.com',
  password: 'abcd1234',
  firstName: 'Harvey',
  lastName: 'Milk',
  born: 1930,
  died: 1978,
  bio: 'Harvey Bernard Milk was an American politician and th efirst openly',
  city: 'San Francisco',
  state: 'California'
}

// const email = user.email;
const { email, firstName, lastName } = user; // 배열과 달리 순서상관x,  key값!!

const { born: birthYear, died: deathYear } = user; // 변수 변경

const { state = 'Korea', job = 'Developer' } = user; // 디폴트값( 값이있으면 디폴트값x)



/* 메게변수 분해 */

function fullName(user) {
  return `${user.firstName} ${user.lastName}`
}

function fullName2(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`
}

function fullName3({ firstName, lastName = 'kim' }) { // 디폴트 값도 가능
  return `${firstName} ${lastName}`
}

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

movies.filter((movie) => movie.score > 95);
movies.filter(({ score }) => score > 95);

movies.map(movie => {
  return `${movie.title} (${movie.year}) is rated by ${movie.score}`;
})
movies.map(({ title, year = 'N/A', score }) => {
  return `${title} (${year}) is rated by ${score}`;
})
