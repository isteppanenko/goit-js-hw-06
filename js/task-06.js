const validation = document.querySelector('#validation-input');
const validationItem = parseInt(validation.dataset.length);

validation.addEventListener('blur', event => {
  if (validationItem === validation.value.length) {
    validation.classList.remove('invalid');
    validation.classList.add('valid');
  } else {
    validation.classList.remove('valid');
    validation.classList.add('invalid');
  }
});
