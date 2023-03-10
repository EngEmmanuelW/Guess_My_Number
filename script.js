'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//with math.trunc, no decimal will appear
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //when the player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(7, 178, 235)';
    document.querySelector('.number--1').textContent = 'Congratulations....You WON!';
    document.querySelector('.number--1').style.color = 'purple';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').style.color = 'red';

    if (score > highscore) {
      score = highscore;
      document.querySelector('.highscore').textContent = highscore;
    }
    /** 
 * //Refactored code
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too high!' : 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
**/

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      //Take note of the score--
      document.querySelector('.message').textContent = 'Too high!';
      //This down code stays in the new line
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});



document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(148, 17, 148)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('h1').textContent = 'PREDICT MY CODE!';
});
