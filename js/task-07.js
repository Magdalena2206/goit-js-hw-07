const inputSlider = document.querySelector('input#font-size-control')
const spanText = document.querySelector('span#text')

inputSlider.addEventListener('change', txt => {
    spanText.style.fontSize = `${txt.target.value }px`
})