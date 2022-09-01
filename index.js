'use strict'

let guess_number = document.querySelector('.guess');
let number_place = document.querySelector('.number_place')
let message = document.querySelector('.message');
const check = document.querySelector('.check_btn')
const reset = document.querySelector('.reset_btn')

let secretNumber = Math.trunc(Math.random() * 20 + 1)

check.addEventListener('click', guessNumber)
reset.addEventListener('click', resetGame)

function guessNumber() {
  if (guess_number.value == '') {
    message.textContent = 'Not a number!'
  }
  else if (guess_number.value < secretNumber) {
    message.textContent = "Too low!"
  }
  else if (guess_number.value > secretNumber) {
    message.textContent = "Too high!"
  }
  else if (guess_number.value == secretNumber) {
    message.textContent = "You won!"
    number_place.textContent = secretNumber;
    document.body.classList.add('win');
  }
}

function resetGame() {
  secretNumber;
  guess_number.value = '';
  message.textContent = 'Start guessing:)'
  document.body.style.background = '#FFFFF';
}