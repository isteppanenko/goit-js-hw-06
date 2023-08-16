let counterValue = 0;
const valueElement = document.querySelector("#value");
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const updateValue = () => {
  valueElement.textContent = counterValue;
};
const plusClick = () => {
  counterValue += 1;
  updateValue();
};
const minusClick = () => {
  counterValue -= 1;
  updateValue();
};
buttonPlus.addEventListener("click", plusClick);
buttonMinus.addEventListener("click", minusClick);
