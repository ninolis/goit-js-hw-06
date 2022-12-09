'use strict';

const textInput = document.querySelector('#validation-input');
const textInputLength = document.querySelector('[data-length="6"]');

textInput.addEventListener('blur', () => {
  if (textInput.value.length === Number(textInputLength.dataset.length)) {
    textInput.value = 'Correct';
    textInput.removeAttribute('class');
    textInput.classList.add('valid');
  } else {
    textInput.value = 'Not 6!';
    textInput.removeAttribute('class');
    textInput.classList.add('invalid');
  }
});
