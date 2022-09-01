'use strict'

let guess_number = document.querySelector('.guess');
let number_place = document.querySelector('.number_place')
let message = document.querySelector('.message');
const check = document.querySelector('.check_btn')

let secretNumber = Math.trunc(Math.random() * 20 + 1)

check.addEventListener('click', guessNumber)

function guessNumber() {
  if (guess_number.value < secretNumber) {
    message.textContent = "Too low!"
  }
  else if (guess_number.value > secretNumber) {
    message.textContent = "Too high!"
  }
  else if (guess_number.value == secretNumber) {
    message.textContent = "You won!"
    number_place.textContent = secretNumber;
    document.body.classList.toggle('win')
  }
}