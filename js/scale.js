const STEP_SCALE = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DEFAULT_SCALE = 100;

const scaleInputElement = document.querySelector('.scale__control--value');
const scaleButtonMinusElement = document.querySelector('.scale__control--smaller');
const scaleButtonPlusElement = document.querySelector('.scale__control--bigger');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

const changeScaleImage = (value = DEFAULT_SCALE) => {
  imagePreviewElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onMinusScaleClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  changeScaleImage(newValue);
};

const onPlusScaleClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  changeScaleImage(newValue);
};

const resetScale = () => {
  changeScaleImage();
};

scaleButtonMinusElement.addEventListener('click', onMinusScaleClick);

scaleButtonPlusElement.addEventListener('click', onPlusScaleClick);

export {resetScale};
