function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorName = document.querySelector('span.color')


changeBtn.addEventListener('click', c => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
})