const recipeName = decodeURIComponent(window.location.href.split('=')[1])
const recipeInfo = JSON.parse(localStorage.getItem(recipeName))
const ingredients = recipeInfo['ingredients']
const img = recipeInfo['img']

const title = document.getElementById('title')
const ingredientList = document.getElementById('ingredients')

title.textContent = recipeName

ingredients.forEach(ingredient => {
    const newIngredient = document.createElement('li')
    newIngredient.textContent = ingredient
    ingredientList.appendChild(newIngredient)
});

const hero = document.querySelector('.hero')
hero.style.backgroundImage = "url('" + img + "')"