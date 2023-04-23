let counterValue = 0;
const valueRef = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// console.log(valueRef.textContent);
// console.log(decrementBtn.textContent);
// console.log(incrementBtn.textContent);

const onClickDecrementBtn = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const onClickIncrementBtn = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
