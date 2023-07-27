// const p1Button = document.querySelector('#p1Button')
// const p2Button = document.querySelector('#p2Button')
// const p1Display = document.querySelector('#p1Display')
// const p2Display = document.querySelector('#p2Display')
// const resetButton = document.querySelector('#reset')
// const playtoSelect = document.querySelector('#playto')

// let p1Score = 0
// let p2Score = 0
// let winningScore = 3
// let isGameOver = false

// p1Button.addEventListener('click', function () {
//   if (!isGameOver) {
//     p1Score += 1
//     if (p1Score === winningScore) {
//       isGameOver = true
//       p1Display.classList.add('has-text-success')
//       p2Display.classList.add('has-text-danger')
//       p1Button.disabled = true;
//       p2Button.disabled = true;
//     }
//     p1Display.textContent = p1Score
//   }
// })

// p2Button.addEventListener('click', function () {
//   if (!isGameOver) {
//     p2Score += 1
//     if (p2Score === winningScore) {
//       isGameOver = true
//       p1Display.classList.add('has-text-danger')
//       p2Display.classList.add('has-text-success')
//       p1Button.disabled = true;
//       p2Button.disabled = true;

//     }
//     p2Display.textContent = p2Score
//   }
// })

// playtoSelect.addEventListener('change', function () {
//   winningScore = parseInt(this.value)
//   reset()
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//   isGameOver = false;

//   p1Score = 0
//   p2Score = 0
//   p1Display.textContent = p1Score
//   p2Display.textContent = p2Score
//   p1Display.classList.remove('has-text-success', 'has-text-danger')
//   p2Display.classList.remove('has-text-success', 'has-text-danger')
//   p1Button.disabled = false;
//   p2Button.disabled = false;
// }




// ver2
// const p1 = {
//   score: 0,
//   button: document.querySelector('#p1Button'),
//   display: document.querySelector('#p1Display')
// }
// const p2 = {
//   score: 0,
//   button: document.querySelector('#p2Button'),
//   display: document.querySelector('#p2Display')
// }
// const resetButton = document.querySelector('#reset')
// const playtoSelect = document.querySelector('#playto')

// let winningScore = 3
// let isGameOver = false

// function updateScores(player, opponent) {
//   if (!isGameOver) {
//     player.score += 1
//     if (player.score === winningScore) {
//       isGameOver = true
//       player.display.classList.add('has-text-success')
//       opponent.display.classList.add('has-text-danger')
//       player.button.disabled = true;
//       opponent.button.disabled = true;
//     }
//     player.display.textContent = player.score
//   }
// }


// p1.button.addEventListener('click', function () {
//   updateScores(p1, p2)
// })

// p2.button.addEventListener('click', function () {
//   updateScores(p2, p1)
// })

// playtoSelect.addEventListener('change', function () {
//   winningScore = parseInt(this.value)
//   reset()
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//   isGameOver = false;
//   for(let p of [p1,p2]){
//     p.score = 0
//     p.display.textContent = p.score
//     p.display.classList.remove('has-text-success', 'has-text-danger')
//     p.button.disabled = false;
//   }
// }




// ver3 - class 사용해서 내가 함 해봄
class Player{
  constructor(player){
    this.score = 0,
    this.button = document.querySelector(`#${player}Button`),
    this.display =  document.querySelector(`#${player}Display`)
  }
  updateScores(opponent) {
    if (!isGameOver) {
      this.score += 1
      if (this.score === winningScore) {
        isGameOver = true
        this.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        this.button.disabled = true;
        opponent.button.disabled = true;
      }
      this.display.textContent = this.score
    }
  }
}

const p1 = new Player('p1')
const p2 = new Player('p2');

const resetButton = document.querySelector('#reset')
const playtoSelect = document.querySelector('#playto')

let winningScore = 3
let isGameOver = false


p1.button.addEventListener('click', function () {
  p1.updateScores(p2)
})

p2.button.addEventListener('click', function () {
  p2.updateScores(p1)
})

playtoSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset()
})

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  for(let p of [p1,p2]){
    p.score = 0
    p.display.textContent = p.score
    p.display.classList.remove('has-text-success', 'has-text-danger')
    p.button.disabled = false;
  }
}