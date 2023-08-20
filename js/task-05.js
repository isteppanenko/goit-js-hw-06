const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', updateValue);

function updateValue(event) {
  const inputValue = event.target.value;
  if (inputValue === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = event.target.value;
  }
}
