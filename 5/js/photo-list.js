import {simularDescriptions} from './data.js';

const userPhotosList = document.querySelector('.container');
const simularPicruresTemplate = document.querySelector('#picture').content.querySelector('.picture');

const simularPhotos = simularDescriptions();

const simularPhotosFragment = document.createDocumentFragment();

simularPhotos.forEach(({url, comments, likes}) => {
  const photoElement = simularPicruresTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__comments').textContent = comments;
  photoElement.querySelector('.picture__likes').textContent = likes;
  simularPhotosFragment.appendChild(photoElement);
});

userPhotosList.appendChild(simularPhotosFragment);
