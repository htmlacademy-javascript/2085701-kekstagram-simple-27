import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './filter.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModal = document.querySelector('body');
const userForm = document.querySelector('#upload-select-image');
const userModalOpenElement = document.querySelector('.img-upload__input');
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel');

const pristine = new Pristine(userForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__text__error',
});

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal ();
  }
};

const clearFileInput = () => {
  userForm.reset();
};

function openUserModal () {
  userModal.classList.add('modal-open');
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeUserModal () {
  userModal.classList.remove('modal-open');
  userModalElement.classList.add('hidden');
  clearFileInput();
  resetScale();
  resetEffects();
  pristine.reset();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    userForm.submit();
  }
});

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});


