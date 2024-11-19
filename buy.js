const recipeName = decodeURIComponent(window.location.href.split('=')[1]);
const recipeInfo = JSON.parse(localStorage.getItem(recipeName));
const ingredients = recipeInfo['ingredients'];
const img = recipeInfo['img'];

const title = document.getElementById('title');
const ingredientList = document.getElementById('ingredients');

title.textContent = recipeName;

ingredients.forEach(ingredient => {
    const newIngredient = document.createElement('li');
    const newIngredientLabel = document.createElement('label');
    const newIngredientCheckbox = document.createElement('input');
    newIngredientLabel.textContent = ingredient;
    newIngredientCheckbox.setAttribute('type', 'checkbox');
    newIngredient.appendChild(newIngredientCheckbox);
    newIngredient.appendChild(newIngredientLabel);
    ingredientList.appendChild(newIngredient);
});

const hero = document.querySelector('.hero');
hero.style.backgroundImage = "url('" + img + "')";

const confirmation = document.getElementById('confirmation');

function buy() {
    
    const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    if (selectedItems.length === 0) {
        alert('Please select at least one item to purchase.');
        return;
    }

   
    confirmation.style.display = 'block';
}
