const txtInput = document.querySelector("#validation-input")
console.log(txtInput.getAttribute('data-length'))
txtInput.addEventListener('blur', placeholder => {
	if (placeholder.target.value.length == txtInput.getAttribute('data-length')) {
		txtInput.classList.add('valid')
		 if (txtInput.classList.contains('invalid')) {
			 txtInput.classList.remove('invalid')
		 }
	 } else {
		 if (txtInput.classList.contains('valid')) {
			 txtInput.classList.remove('valid')
		}
		txtInput.classList.add('invalid')
	}
})
