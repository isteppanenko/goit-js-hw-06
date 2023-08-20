const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsIngredients = document.querySelector('ul#ingredients');
const listElements = ingredients.map(ingredient => {
  const itemList = document.createElement('li');
  itemList.textContent = ingredient;
  itemList.classList.add('item');
  return itemList;
});
listsIngredients.prepend(...listElements);
