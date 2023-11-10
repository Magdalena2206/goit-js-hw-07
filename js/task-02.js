const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listIngr = document.querySelector('#ingredients')
const listArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = "items"
	item.textContent = ingredient
	listArray.push(item)
})

listIngr.append(...listArray)