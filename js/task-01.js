const categoryList = document.querySelector("ul#categories");

const itemsLists = categoryList.querySelectorAll(".item");

console.log(`Number of categories: ${itemsLists.length}`);
itemsLists.forEach((itemList) => {
  const categoryTitle = itemList.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);
  const categoryElements = itemList.querySelectorAll("ul li").length;
  console.log(`Elements: ${categoryElements}`);
});
