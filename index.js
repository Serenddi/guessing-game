'use strict'

let guess_number = document.querySelector('.guess');
let number_place = document.querySelector('.number_place')
let message = document.querySelector('.message');
const check = document.querySelector('.check_btn')
const reset = document.querySelector('.reset_btn')
let score = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1)

check.addEventListener('click', guessNumber)
reset.addEventListener('click', resetGame)

function guessNumber() {
  if (guess_number.value == '') {
    message.textContent = 'Not a number!'
  }
  else if (guess_number.value < secretNumber && score > 0) {
    message.textContent = "Too low!"
    score--;
    document.querySelector('.score').textContent = `Score: ${score}`;

    if (score === 0) {
      message.textContent = "You lost :("
    }
  }
  else if (guess_number.value > secretNumber && score > 0) {
    message.textContent = "Too high!"
    score--;
    document.querySelector('.score').textContent = `Score: ${score}`;

    if (score === 0) {
      message.textContent = "You lost :("
    }
  }
  else if (guess_number.value == secretNumber) {
    message.textContent = "You won!"
    number_place.textContent = secretNumber;
    document.body.style.background = 'rgb(46, 159, 46)';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = `Highscore: ${highscore}`;
    }
  }
}

function resetGame() {
  score = 20;
  document.querySelector('.score').textContent = `Score: ${score}`;
  secretNumber = Math.trunc(Math.random() * 20 + 1)
  guess_number.value = '';
  number_place.textContent = '?';
  message.textContent = 'Start guessing:)'
  document.body.style.background = '#000000'
}
