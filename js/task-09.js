'use strict';

const buttonChangeColor = document.querySelector('.change-color');
const spanColorValue = document.querySelector('.color');

buttonChangeColor.addEventListener('click', changeColor);

function changeColor() {
  const randomHexColor = getRandomHexColor();
  // document.body.style.backgroundColor = randomHexColor;
  document.body.style.cssText = `background-color: ${randomHexColor}`;

  spanColorValue.textContent = randomHexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
