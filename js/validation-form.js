const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userForm);

userForm.addEventListener('submit', () => {
  pristine.validate();
});
