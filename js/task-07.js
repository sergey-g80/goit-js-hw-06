
const inputRangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

function fontSizeControl(el) {
    textRef.style.fontSize = el.currentTarget.value + 'px';
}

inputRangeRef.addEventListener('input', fontSizeControl);


