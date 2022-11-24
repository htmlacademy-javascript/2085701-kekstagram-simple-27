const userPhotosListElement = document.querySelector('.container');
const similarPicruresTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderSimilarPhotos = (similarPhotos) => {
  const similarPhotosFragment = document.createDocumentFragment();

  similarPhotos.forEach(({url, comments, likes}) => {
    const photoElement = similarPicruresTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarPhotosFragment.appendChild(photoElement);
  });

  userPhotosListElement.appendChild(similarPhotosFragment);
};

export {renderSimilarPhotos};
