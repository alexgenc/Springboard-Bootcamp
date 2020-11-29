// 3.3 - JavaScript Timers Exercise

// countDown
// Write a function that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

function countDown(number) {
  const time = setInterval(function() {
      number--;
      if (number <= 0) {
          clearInterval(time);
          console.log('DONE!');
      } else {
          console.log(number);
      }
  }, 1000);
}

// randomGame
// Write a function that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

function randomGame() {
  let counter = 0;
  const tries = setInterval(function() {
      let number = Math.random();
      counter++;
      if (number > 0.75) {
          clearInterval(tries);
          console.log(`It took ${counter} try/tries.`);
      }
  }, 1000);
}
