import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './filter.js';

const overlayImageElement = document.querySelector('.img-upload__overlay');
const userModalElement = document.querySelector('body');
const userFormElement = document.querySelector('#upload-select-image');
const userModalOpenElement = document.querySelector('.img-upload__input');
const userModalCloseElement = overlayImageElement.querySelector('.img-upload__cancel');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal ();
  }
};

const clearFileInput = () => {
  userFormElement.reset();
};

function openUserModal () {
  userModalElement.classList.add('modal-open');
  overlayImageElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModalElement.classList.remove('modal-open');
  overlayImageElement.classList.add('hidden');
  clearFileInput();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

export {openUserModal, closeUserModal};
