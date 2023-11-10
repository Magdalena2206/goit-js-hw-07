let countValue = 0
const displayContent = document.querySelector('#value')
const btnInc = document.querySelector('button[data-action="increment"]')
const btnDec = document.querySelector('button[data-action="decrement"]')

btnInc.addEventListener('click', () => {
    countValue++
    displayContent.textContent = countValue
}
)
btnDec.addEventListener('click', () => {
    countValue--
    displayContent.textContent = countValue
})