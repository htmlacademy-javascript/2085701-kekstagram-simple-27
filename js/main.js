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

function getRandomPositiveInteger (a, b) {
    if (a < 0 || b < 0) {
      return NaN;
    }

    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;

    return Math.floor(result);
  };

  function checkStringLength (string, length) {
    return string.length <= length;
  };

  const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


  const createPhotoDescription = (index) => {
    return {
      id: index,
      url: `photos/${index}.jpg`,
      description: getRandomArrayElement(descriptions),
      likes: getRandomPositiveInteger(likesCount.MIN, likesCount.MAX),
      comments: getRandomPositiveInteger(commentsCount.MIN, commentsCount.MAX),
    };
  };

  const simularDescriptions = () => Array.from({length: SIMILAR_DESCRIPTION_COUNT}, (_, descriptionIndex) => createPhotoDescription(descriptionIndex + 1));
  simularDescriptions();
