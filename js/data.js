import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const SIMILAR_DESCRIPTION_COUNT = 25;

const likesCount = {
  MIN: 15,
  MAX: 200,
};

const commentsCount = {
  MIN: 0,
  MAX: 200,
};

const descriptions = [
  'Настроение: Питер',
  'Такого Вы ещё не видели!',
  'Это было замечательное лето',
  'Отлично отметили др @nikki9453',
  'На чиле, на расслабоне',
  'Вдох, выдох и пошёл...',
  'Winter is coming'
];

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(descriptions),
  likes: getRandomPositiveInteger(likesCount.MIN, likesCount.MAX),
  comments: getRandomPositiveInteger(commentsCount.MIN, commentsCount.MAX),
});

const simularDescriptions = () => Array.from({length: SIMILAR_DESCRIPTION_COUNT}, (_, descriptionIndex) => createPhotoDescription(descriptionIndex + 1));
export {simularDescriptions};
