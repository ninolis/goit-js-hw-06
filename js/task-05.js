'use strict';

const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', updateValue);

function updateValue(e) {
  if (!input.value) {
    span.textContent = 'Anonymous';
  } else {
    span.textContent = e.target.value;
  }
}
