const inputControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');
inputControl.addEventListener('input', updateSize);
function updateSize(size) {
  textSize.style.fontSize = size.target.value + 'px';
}
textSize.style.fontSize = textSize;
