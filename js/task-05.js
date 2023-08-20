const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', updateValue);
function updateValue(event) {
  if ('input' === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = event.target.value;
  }
}
