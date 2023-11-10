const categoriesLi = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesLi.length}`)

categoriesLi.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
