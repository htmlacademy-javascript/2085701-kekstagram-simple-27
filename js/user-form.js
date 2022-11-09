import {isEscapeKey} from './util.js';

const userModalElement = document.querySelector('.img-upload__overlay');
const userModal = document.querySelector('body');
const userForm = document.querySelector('.img-upload__form');
const userModalOpenElement = document.querySelector('.img-upload__input');
const userModalCloseElement = userModalElement.querySelector('.img-upload__cancel');

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
}

userModalOpenElement.addEventListener('change', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});


