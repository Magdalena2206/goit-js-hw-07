const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', placeholder => {
    output.textContent = placeholder.target.value
    if (placeholder.target.value === '') {
        output.textContent = 'Anonumus'
    }
})