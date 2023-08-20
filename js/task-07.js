const inputControl = document.querySelector('#font-size-control');
console.log(inputControl);
const textSize = document.querySelector('#text');
console.log(textSize);
inputControl.addEventListener('input', updateSize);
function updateSize(size) {
  textSize.style.fontSize = size.target.value + 'px';
}
textSize.style.fontSize = textSize;
