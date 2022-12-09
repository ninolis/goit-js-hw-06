'use strict';

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/////////////////////////////////////////
// ** variant 1
const ul = document.querySelector('.gallery');

let htmlString = '';

for (const image of images) {
  const str = `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="400px" height="250px"></li>`;
  htmlString += str;
}

ul.insertAdjacentHTML('afterbegin', htmlString);

/////////////////////////////////////////
// ** variant 2
/*
const ul = document.querySelector('.gallery');
let htmlString = '';
images.forEach((image) => {
  const str = `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="400px" height="250px"></li>`;
  htmlString += str;
});

ul.insertAdjacentHTML('afterbegin', htmlString);
*/
