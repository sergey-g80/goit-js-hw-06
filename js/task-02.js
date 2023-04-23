const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");
// console.log(ingredientsRef);
const itemsRef = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

ingredientsRef.append(...itemsRef);

// const bodyNew = document.body
// const parentNode = document.body.parentNode
// console.log(bodyNew)
// console.log(parentNode)