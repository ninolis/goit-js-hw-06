'use strict';

/////////////////////////////////////////
// ** variant 1
// /*

const decreaseBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const increaseBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const counterText = document.getElementById('value');
let count = 0;

decreaseBtn.addEventListener('click', function () {
  count -= 1;
  counterText.innerHTML = count;
});

increaseBtn.addEventListener('click', function () {
  count += 1;
  return (counterText.innerHTML = count);
});

// */

/////////////////////////////////////////
// ** variant 2
//set initial count
// let count = 0;

// // select value and buttons
// const value = document.querySelector('#value');
// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     if (btn.dataset.action === 'decrement') {
//       count -= 1;
//     } else if (btn.dataset.action === 'increment') {
//       count += 1;
//     }

//     value.textContent = count;
//   });
// });
