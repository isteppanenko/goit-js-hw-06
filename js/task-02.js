const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listsIngredients = document.querySelector('ul#ingredients');
ingredients.forEach(ingredient => {
  const itemList = document.createElement('li');
  itemList.textContent = ingredient;
  itemList.classList.add('item');
  listsIngredients.prepend(itemList);
});
