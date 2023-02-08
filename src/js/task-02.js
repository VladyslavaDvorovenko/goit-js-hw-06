const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientEl = document.querySelector("#ingredients");

const listIngredients = ingredients.map((ingredient) => {
  const elem = document.createElement("li");
  elem.textContent = ingredient;
  elem.classList.add("item");
  return elem;
});

ingredientEl.append(...listIngredients);
