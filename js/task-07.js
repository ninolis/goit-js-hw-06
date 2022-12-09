'use strict';

const slider = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

slider.addEventListener(
  'input',
  (e) => (textOutput.style.fontSize = e.target.value + 'px')
);
