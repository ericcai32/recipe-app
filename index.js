function initializeRecipes() {
    let recipes = JSON.parse(localStorage.getItem('recipes'))
    if (recipes != null) {
        console.log(recipes)
    }
    else {
        recipes = ["Thai Yellow Curry", "Korean Fried Chicken", "Mac and Cheese", "Beef and Broccoli", "Spaghetti Carbonara", "Avocado Toast",]
        
        console.log(recipes)
        Thai_Yellow_Curry = {
            ingredients: [
                "1 tablespoon coriander seeds",
                "1 teaspoon cumin seeds",
                "1 teaspoon turmeric powder",
                "1 teaspoon black peppercorns",
                "1-2 dried red chilies (adjust to taste)",
                "4-5 cloves garlic, minced",
                "1-inch piece of ginger, peeled and chopped",
                "1 stalk of lemongrass, finely chopped (white part only)",
                "Zest of 1 lime",
                "1 tablespoon fish sauce (or soy sauce for a vegetarian option)",

                "1 tablespoon vegetable oil",
                "1 onion, sliced",
                "1 bell pepper (red or yellow), sliced",
                "1-2 cups vegetables (carrots, zucchini, or eggplant), chopped",
                "1 can (13.5 oz) coconut milk",
                "1-2 cups protein (chicken, tofu, or shrimp), cubed",
                "Fresh basil leaves for garnish",
                "Lime wedges for serving",
                "Cooked rice (for serving)"],
            description: ["A creamy, aromatic dish featuring a blend of spices, coconut milk, and your choice of protein and vegetables, served with rice for a comforting and flavorful experience"],
            instructions: [
                "In a dry skillet, toast the coriander and cumin seeds until fragrant. Let them cool, then grind to a powder.",
                "In a food processor, combine the ground spices, turmeric, black peppercorns, dried chilies, garlic, ginger, lemongrass, lime zest, and fish sauce. Blend until you get a smooth paste, adding a little water if needed.",
                "Heat the vegetable oil in a large pot over medium heat. Add the sliced onion and cook until softened.",
                "Stir in the curry paste and cook for about 2-3 minutes until fragrant.",
                "Add the bell pepper and other vegetables, stirring to coat them in the paste.",
                "Pour in the coconut milk and bring to a simmer. Add the protein of your choice and cook until fully cooked (about 5-10 minutes for chicken or tofu, 2-3 minutes for shrimp).",
                "Taste the curry and adjust the seasoning with more fish sauce or a pinch of sugar if needed.",
                "Serve the curry hot, garnished with fresh basil leaves and lime wedges on the side. Enjoy it with steamed rice."],
            tags: [],
            img: "https://www.sandravalvassori.com/wp-content/uploads/2022/03/Thai-yellow-curry-chicken-10925-2.jpg",
            votes: 0
        }

        localStorage.setItem('Thai Yellow Curry', JSON.stringify(Thai_Yellow_Curry))

        Korean_Fried_Chicken = {
            ingredients: [
                "2 lbs chicken wings or drumsticks",
                "1 cup all-purpose flour",
                "1/2 cup cornstarch",
                "1 teaspoon baking powder",
                "1 teaspoon salt",
                "1/2 teaspoon black pepper",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon onion powder",
                "Oil for frying",

                "1/4 cup gochujang (Korean chili paste)",
                "1/4 cup soy sauce",
                "1/4 cup honey or brown sugar",
                "2 tablespoons rice vinegar",
                "2 cloves garlic, minced",
                "1 teaspoon sesame oil",
                "1 teaspoon grated ginger",
                "Sesame seeds and chopped green onions for garnish"],
            description: ["A mouthwatering delight, featuring irresistibly crispy, golden-brown chicken coated in a sticky, spicy-sweet sauce that tantalizes your taste buds and leaves you craving more."],
            instructions: [
                "Rinse the chicken pieces and pat them dry with paper towels. This helps achieve maximum crispiness.",
                "In a bowl, mix together the flour, cornstarch, baking powder, salt, black pepper, garlic powder, and onion powder.",
                "Dredge each piece of chicken in the flour mixture, shaking off the excess. For extra crispiness, you can double-dip: dip the coated chicken back into a bit of water and then again into the flour mixture.",
                "Heat oil in a deep fryer or large pot to 350°F (175°C). Fry the chicken in batches, making sure not to overcrowd the pot. Cook for about 10-12 minutes until golden brown and crispy. Remove and drain on paper towels.",
                "In a saucepan, combine gochujang, soy sauce, honey (or brown sugar), rice vinegar, minced garlic, sesame oil, and grated ginger. Cook over medium heat, stirring until well combined and slightly thickened, about 3-5 minutes.",
                "In a large bowl, toss the fried chicken with the sauce until well coated.",
                "Garnish with sesame seeds and chopped green onions. Serve immediately and enjoy your delicious Korean Fried Chicken!"],
            tags: [],
            img: "https://www.andy-cooks.com/cdn/shop/articles/20230826032636-andy-20cooks-20-20korean-20fried-20chicken.jpg?v=1693088250",
            votes: 0
        }

        localStorage.setItem('Korean Fried Chicken', JSON.stringify(Korean_Fried_Chicken))

        Mac_and_Cheese = {
            ingredients: [
                "8 oz elbow macaroni (or your favorite pasta)",
                "Salt (for boiling water)",
                "2 tablespoons butter",
                "2 tablespoons all-purpose flour",
                "2 cups milk (whole or 2%)",
                "2 cups shredded sharp cheddar cheese",
                "1 cup shredded mozzarella cheese",
                "1 teaspoon mustard powder (optional)",
                "1/2 teaspoon garlic powder",
                "1/2 teaspoon onion powder",
                "Salt and pepper to taste",
                "1/2 cup breadcrumbs",
                "2 tablespoons melted butter",
                "1/4 cup grated Parmesan cheese"],
            description: ["Savor the irresistible allure of Mac and Cheese, where tender pasta is enveloped in a rich, creamy cheese sauce, delivering pure comfort and nostalgia in every delectable bite."],
            instructions: [
                "In a large pot, bring salted water to a boil. Add the elbow macaroni and cook according to package instructions until al dente. Drain and set aside.",

                "In a large saucepan, melt the butter over medium heat. Add the flour and whisk constantly for about 1-2 minutes until it forms a paste (roux).",
                "Gradually add the milk, whisking continuously until the mixture is smooth and starts to thicken (about 5 minutes).",
                "Reduce the heat to low, then stir in the shredded cheddar and mozzarella cheeses until melted and creamy. Add the mustard powder, garlic powder, onion powder, salt, and pepper. Adjust seasoning to taste.",

                "Add the cooked macaroni to the cheese sauce, stirring until well coated.",

                "If using, preheat the oven to 350°F (175°C). In a small bowl, mix the breadcrumbs with melted butter and Parmesan cheese. Sprinkle this mixture over the mac and cheese in a baking dish.",

                "Bake in the preheated oven for 20-25 minutes, or until bubbly and golden brown on top.",

                "Let it cool for a few minutes before serving. Enjoy your creamy, cheesy Mac and Cheese!"],
            tags: [],
            img: "https://bakewithzoha.com/wp-content/uploads/2023/11/baked-mac-and-cheese-featured.jpg",
            votes: 0
        }
        localStorage.setItem('Mac and Cheese', JSON.stringify(Mac_and_Cheese))

        Beef_and_Broccoli = {
            ingredients: [
                "1 lb beef (flank steak or sirloin), thinly sliced against the grain",
                "2 tablespoons soy sauce",
                "1 tablespoon cornstarch",
                "1 tablespoon vegetable oil",
                "2 cups broccoli florets",
                "2 tablespoons vegetable oil",
                "3 cloves garlic, minced",
                "1-inch piece of ginger, minced",
                "1/2 cup beef broth (or water)",
                "2 tablespoons soy sauce",
                "1 tablespoon oyster sauce (optional)",
                "1 tablespoon rice vinegar",
                "1 teaspoon sesame oil",
                "Cooked rice for serving"],
            description: ["Tender slices of beef are stir-fried to perfection with vibrant, crisp broccoli in a rich, flavorful sauce that brings a taste of Chinese cuisine to your table."],
            instructions: [
                "In a bowl, combine the sliced beef, soy sauce, cornstarch, and vegetable oil. Mix well and let it marinate for at least 15 minutes.",

                "In a pot of boiling water, blanch the broccoli florets for about 2 minutes until bright green and slightly tender. Drain and set aside.",

                "In a large skillet or wok, heat 2 tablespoons of vegetable oil over high heat. Add the marinated beef in a single layer and stir-fry for 2-3 minutes until browned but not fully cooked. Remove and set aside.",

                "In the same skillet, add a bit more oil if needed, then stir-fry the garlic and ginger for about 30 seconds until fragrant. Add the blanched broccoli and stir-fry for another 1-2 minutes.",

                "Return the beef to the skillet and pour in the beef broth, soy sauce, oyster sauce (if using), rice vinegar, and sesame oil. Stir everything together and cook for another 2-3 minutes until the beef is cooked through and the sauce thickens slightly.",

                "Serve hot over cooked rice and enjoy your delicious Beef and Broccoli!"],
            tags: [],
            img: "https://www.smalltownwoman.com/wp-content/uploads/2019/10/Beef-and-Broccoli-Recipe-Card.jpg",
            votes: 0
        }
        localStorage.setItem('Beef and Broccoli', JSON.stringify(Beef_and_Broccoli))

        
        Spaghetti_Carbonara = {
            ingredients: ["400g spaghetti", "150g diced pancetta or guanciale", "2 large eggs", "50g grated Pecorino Romano cheese", "50g grated Parmesean cheese","2 cloves peeled garlic", "Freshly ground black pepper", "Salt", "2 tablespoons olive oil"],
            description: "A decadent Italian classic that marries silky pasta with crispy pancetta, creamy egg, and sharp Pecorino, creating an irresistible harmony of rich, savory flavors",
            instructions: ["Boil salted water and cook spaghetti until al dente."
                ,"In a skillet, cook pancetta or guanciale until crispy, rendering the fat."
                , "Whisk together eggs, Pecorino Romano, and Parmesan in a bowl."
                ,"Add freshly ground black pepper to the egg mixture."
                ,"Reserve 1 cup of pasta water, then drain the pasta."
                ,"Toss the hot spaghetti with the crispy pancetta in the skillet."
                ,"Remove the skillet from heat and pour the egg-cheese mixture over the pasta."
                ,"Stir quickly, adding reserved pasta water as needed for creaminess."
                ,"Serve immediately with extra grated cheese and more black pepper."
                ,"Enjoy your creamy, savory Carbonara!"],
            tags: [],
            img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
            votes: 3242
        }
        localStorage.setItem('Spaghetti Carbonara', JSON.stringify(Spaghetti_Carbonara))

        Avocado_Toast = {
            ingredients:["1 ripe avocado", "2 slices of bread", "Salt", "Pepper", "Red Pepper Flakes", "Olive Oil", "Lemon Juice", "Sliced Tomatoes", "Feta cheese", "Arugula", "Fried egg"],
            description:["A vibrant and nourishing dish that combines creamy, ripe avocado spread atop crunchy toasted bread, often enhanced with a sprinkle of salt, pepper, and a drizzle of olive oil, making it the perfect canvas for endless flavorful toppings"],
            instructions:["Toast the bread", "Prepare the Avocado", "Season the Avocado", "Spread the Avocado", "Add Optional Toppings", "Serve and Enjoy!"],
            tags: ["vegan, vegetarian"],
            img: "https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways-768x532.jpeg",
            votes: 0
        }
        localStorage.setItem('Avocado Toast', JSON.stringify(Avocado_Toast))

        Chocolate_Chip_Cookies = {
            ingredients: [
                "1 cup unsalted butter, softened",
                "1 cup granulated sugar",
                "1 cup brown sugar, packed",
                "2 large eggs",
                "1 teaspoon vanilla extract",
                "3 cups all-purpose flour",
                "1 teaspoon baking soda",
                "1/2 teaspoon baking powder",
                "1/2 teaspoon salt",
                "2 cups semisweet chocolate chips"
            ],
            description: [
                "Classic, chewy chocolate chip cookies with a golden-brown edge and soft center, packed with semisweet chocolate chips for the perfect sweet treat."
            ],
            instructions: [
                "Preheat oven to 350°F (175°C).",
                "Cream together the butter, granulated sugar, and brown sugar until smooth.",
                "Beat in the eggs one at a time, then stir in the vanilla.",
                "Dissolve baking soda in hot water and add to the batter along with the salt.",
                "Mix in the flour, then fold in the chocolate chips.",
                "Drop spoonfuls of dough onto ungreased baking sheets.",
                "Bake for about 10 minutes, or until edges are nicely browned.",
                "Let cool on a wire rack before enjoying!"
            ],
            tags: ["dessert", "sweet", "baking"],
            img: "https://cookiesfordays.com/wp-content/uploads/2024/01/chocolate-chip-cookie-recipe-ft.jpg",
            votes: 0
        };
        localStorage.setItem('Chocolate Chip Cookies', JSON.stringify(Chocolate_Chip_Cookies));

        Singaporean_Chicken_Curry = {
            ingredients: [
                "1 whole chicken, cut into pieces",
                "2 tablespoons curry powder",
                "1 tablespoon turmeric powder",
                "3 potatoes, peeled and cut into chunks",
                "1 onion, sliced",
                "3 cloves garlic, minced",
                "1-inch piece of ginger, minced",
                "2 tablespoons vegetable oil",
                "1 can (13.5 oz) coconut milk",
                "1 cup chicken broth",
                "Salt to taste",
                "Fresh cilantro leaves for garnish",
                "Steamed rice (for serving)"
            ],
            description: [
                "A fragrant and spicy Singaporean curry that combines tender chicken, potatoes, and a rich coconut-based sauce, served hot with steamed rice."
            ],
            instructions: [
                "Rub the chicken pieces with curry powder and turmeric powder. Let them marinate for at least 30 minutes.",
                "In a large pot, heat the vegetable oil over medium heat. Sauté the onions until soft, then add the garlic and ginger and cook until fragrant.",
                "Add the marinated chicken to the pot and brown on all sides.",
                "Add the potatoes, coconut milk, and chicken broth. Bring to a simmer.",
                "Cover the pot and cook for about 30 minutes, or until the chicken is cooked through and the potatoes are tender.",
                "Season with salt to taste.",
                "Garnish with fresh cilantro leaves and serve hot with steamed rice."
            ],
            tags: ["spicy", "curry", "asian"],
            img: "https://static01.nyt.com/images/2022/01/26/dining/21SINGAPOREREX3-singaporean-chicken-curry/21SINGAPOREREX3-singaporean-chicken-curry-superJumbo-v2.jpg",
            votes: 0
        };
        localStorage.setItem('Singaporean Chicken Curry', JSON.stringify(Singaporean_Chicken_Curry));

    }
}

function showRecipes(filtered) {
    recipes = JSON.parse(localStorage.getItem('recipes'))
    

    const bigContainer = document.getElementById('bigContainer')

    let container
    let newContainer
    let recipeContainers
    let newName
    let newImg

    for (let i = 0; i < Math.ceil(recipes.length / 2); i++) {
        left = i * 2
        right = i * 2 + 1

        container = document.getElementById('firstRow')
        newContainer = container.cloneNode(true)

        recipeContainers = newContainer.querySelectorAll('.recipe-image-container')

        console.log(recipes.length)
        console.log(i)
        console.log("left " + left)
        newName = recipes[left]
        console.log(newName)
        recipeContainers[0].setAttribute('onclick', 'goRecipe("' + newName + '")')
        newImg = JSON.parse(localStorage.getItem(newName))['img']
        recipeContainers[0].querySelector('img').src = newImg
        recipeContainers[0].querySelector('div').textContent = newName

        if (right < recipes.length) {
            newName = recipes[right]
            recipeContainers[1].setAttribute('onclick', 'goRecipe("' + newName + '")')
            newImg = JSON.parse(localStorage.getItem(newName))['img']
            recipeContainers[1].querySelector('img').src = newImg
            recipeContainers[1].querySelector('div').textContent = newName
        }

        bigContainer.appendChild(newContainer)
    }

    container.style.display = 'none'
}

function goRecipe(recipeURL) {
    window.location.href = 'recipe.html?name=' + encodeURIComponent(recipeURL)
}

const sameButton = document.getElementById('featured-btn')  
sameButton.onclick = function() {
    location.reload()
}

initializeRecipes()
showRecipes()

const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

recipes = JSON.parse(localStorage.getItem('recipes'))
recipes.forEach(recipe => {
    recipeItem = document.createElement('div')
    recipeItem.classList.add('dropdown-item')
    recipeItem.textContent = recipe
    recipeItem.style.display = 'none'
    recipeItem.setAttribute('onclick', 'goRecipe("' + recipeItem.textContent + '")')
    dropdown.appendChild(recipeItem)
});
items = document.querySelectorAll('.dropdown-item')

searchInput.addEventListener('input', function() {
   
    if (searchInput.value) {    
        dropdown.style.display = 'block';
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                item.style.display = 'block'
            }
            else {
                item.style.display = 'none'
            }
        })
    } else {
        dropdown.style.display = 'none'; 
    }
});


document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none'; 
    }
});

const cogIcon = document.querySelector('.featured-recipes');
const filterDropdown = document.getElementById('filterDropdown');
const filterButtons = document.querySelectorAll('.filter-button');
let tempRecipes
let filter


cogIcon.onclick = function() {
   
    filterDropdown.classList.toggle('show');
};

filterButtons.forEach(button => {
    button.onclick = function() {
        filter = button.dataset.filter
        if (filter == 'Clear Filters') {
            recipes = ["Thai Yellow Curry", "Korean Fried Chicken", "Mac and Cheese", "Beef and Broccoli", "Spaghetti Carbonara", "Avocado Toast",]
            localStorage.setItem('recipes', JSON.stringify(recipes))
        }
        if (filter == 'Vegan') {
            recipes = ["Mac and Cheese","Avocado Toast",]
            localStorage.setItem('recipes', JSON.stringify(recipes))
        }
        else if (filter == 'Asian') {
            recipes = ["Thai Yellow Curry", "Korean Fried Chicken"]
            localStorage.setItem('recipes', JSON.stringify(recipes))
        }
        else if (filter == 'American') {
            recipes = ["Mac and Cheese", "Beef and Broccoli", "Avocado Toast",]
            localStorage.setItem('recipes', JSON.stringify(recipes))
        }
        else if (filter == 'Italian') {
            recipes = ["Spaghetti Carbonara",]
            localStorage.setItem('recipes', JSON.stringify(recipes))
        }
        window.location.reload()
        console.log(filter);
    };
});


document.addEventListener('click', function(event) {
    if (!cogIcon.contains(event.target) && !filterDropdown.contains(event.target)) {
        filterDropdown.classList.remove('show');
    }
});