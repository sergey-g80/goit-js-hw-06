const buttonArea = document.querySelector(".buttonColor");
buttonArea.addEventListener("click", (el) => {
  const curBtn = el.target;
  console.log(curBtn);
  curBtn.style.backgroundColor = curBtn.textContent;
});

let value1 = '';
let value2 = '';
let selectedOperator = '';
const calculatorArea = document.querySelector('.calculator');
const input = document.querySelector('input');


calculatorArea.addEventListener('click', event => {
    const selectedValue = event.target.textContent;

    switch (selectedValue) {
        case '+':
            selectedOperator = selectedValue;
            return;

            case '-':
            selectedOperator = selectedValue;
            return;

            case '/':
            selectedOperator = selectedValue;
            return;

            case '*':
            selectedOperator = selectedValue;
            return;

            case '=':
                doOperationWithValues();
            return

    }

    if (value1 && selectedOperator && typeof +selectedValue === 'number') {
        value2 += selectedValue;
        return;
    }

    if (typeof +selectedValue === 'number') {
        value1 += selectedValue;
    }

    console.log(value1)
    console.log(value2)
})

function doOperationWithValues () {
    switch (selectedOperator) {
        case '+':
            input.value = +value1 + +value2;
            break;

        case '-':
            input.value = +value1 - +value2;
            break;

        case '/':
            input.value = +value1 / +value2;
            break;

        case '*':
            input.value = +value1 * +value2;
            break;
    }
    cleanValues();
}

function cleanValues () {
    value1 = '';
    value2 = '';
    selectedOperator = '';
}
