const form = document.querySelector('#upload-select-image');

const pristine = new Pristine(form);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});
