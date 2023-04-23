// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");
divBoxesEl.style.display = "flex";
divBoxesEl.style.flexWrap = "wrap";
divBoxesEl.style.alignItems = "center";
divBoxesEl.style.marginTop = "30px";
