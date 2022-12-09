'use strict';

const allCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((element) => {
  console.log(
    `\nCategory: ${element.firstElementChild.textContent}\nElements: ${
      element.getElementsByTagName('li').length
    }`
  );
});

///////////////////////////////////////////////////////
// ** variant 2

// const allCategories = document.getElementsByTagName('h2');

// for (let i = 0; i < allCategories.length; i += 1) {
//   console.log(`\nCategory: ${allCategories[i].textContent}`);
//   const numberOfElements = document
//     .getElementsByClassName('item')
//     [i].getElementsByTagName('li').length;
//   console.log(`Elements: ${numberOfElements}`);
// }
