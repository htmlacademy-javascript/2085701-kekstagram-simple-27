const scaleInput = document.querySelector('.scale__control--value');
const scaleButtonMinus = document.querySelector('.scale__control--smaller');
const scaleButtonPlus = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const DEFAULT_SCALE = 100;

const scaleImage = (value = DEFAULT_SCALE) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleInput.value = `${value}%`;
};

const onMinusScaleClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleImage(newValue);
};

const onPlusScaleClick = () => {
  const currentValue = parseInt(scaleInput.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

scaleButtonMinus.addEventListener('click', onMinusScaleClick);

scaleButtonPlus.addEventListener('click', onPlusScaleClick);

export {resetScale};
