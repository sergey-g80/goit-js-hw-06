// const navEl = document.querySelector(".nav-first");
// console.log(navEl.children[1]);

// const firstNavItemEl = navEl.lastElementChild;
// console.log(firstNavItemEl);

const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesList.length}`);
// console.log(
//   `Number of categories:${document.querySelectorAll(".item").length}`
// );

categoriesList.forEach((e) => {
  console.log(`Category:${e.firstElementChild.textContent}`);
  console.log(`Elements:${e.lastElementChild.querySelectorAll("li").length}`);
  // console.log(`CategoryEl:${e.lastElementChild.textContent}`);
});
