function initializeRecipes() {
    let comRecipes = JSON.parse(localStorage.getItem('comRecipes'))
    if (comRecipes != null) {
        console.log(comRecipes)
    }
    else {
        comRecipes = ["Delicious Jerk Oxtail Recipe!", "Perfectly Baked Salmon!", "Authentic Beef Pho Recipe!", "Fresh California Roll!",]
        localStorage.setItem('comRecipes', JSON.stringify(comRecipes))
        console.log(comRecipes)

        Beef_Pho = {
            ingredients: ["500ml store-bought beef bone broth",
                "2 cloves", 
                "1 cinnamon stick", 
                "2 star anise",
                "6 coriander seeds",
                "4 slices of ginger",
                "2 cloves of garlic",
                "1-2 tablespoons of  fish sauce",
                "1-2 tablespoons of lime juice + a wedge of lime to garnish",
                "1 teaspoons of sugar",
                "Rice noodles (I use Zero Carb noodles because I am counting calories)",
                "200g sirloin steak, very thinly sliced",
                "Handful of beansprouts",
                "2 scallions or spring onions, chopped",
                "2/3 leaves of lettuce, torn",
                "A handful of Celery leaves, torn",
                "Handful of herbs such as coriander, mint and Thai basil",
                "Thinly sliced red chili, however spicy you want it"],
            description: ["After a long-weekend in Hanoi when I ate pho literally three times a day, I was determined to find a way to recreate this delicious pho soup of Vietnam in my kitchen without having to spend five hours slaving over the soup. So I created this kitchen hack - quick and easy pho recipe that's fire"],
            instructions: [
                "Place the beef stock in a pot with the spices and garlic. Slowly heat so that the aromas are released. Cover and simmer for 10 minutes being careful not to let the stock reduce too much. Add a cup of water if needed.",
                "Meanwhile, cook the noodles according to the packet instructions.  Once cooked, assemble your individual bowls with noodles, meat and garnishes as per the photo below. ",
                "Season the soup with lime, sugar and fish sauce, according to your taste. ",
                "Pour the hot soup through a fine mesh sieve directly over the ingredients. Make sure the soup is piping hot so that it will cook the meat. ",
                "Serve with a wedge of lime and garnish with the herbs. ",
                "Place the noodles, meat and vegetables in individual bowls.",
                "Note - if you are uncomfortable cooking meat in the soup then I would suggest sous-viding it at 120F or 50C for 45 minutes beforehand. ",
                "Pour the piping hot soup into each bow through a fine mesh sieve so as to catch the spices.",
                "Garnish each bowl of beef pho with the fresh herbs and serve a wedge of lime. Serve immediately. "],
            tags: [],
            img: "https://images.squarespace-cdn.com/content/v1/5fc09ac511f6a419848436ea/1610669592660-2X6TMRUR1AXCZDDDC0U4/easy-beef-pho.jpeg?format=1500w",
            votes: 0
        }
        localStorage.setItem('Authentic Beef Pho Recipe!', JSON.stringify(Beef_Pho))

        Jerk_Oxtail = {
            ingredients: ["For the Marinade:",
                "2 lbs oxtail, cut into chunks",
                "4-5 scallions, chopped",
                "1 small onion, chopped",
                "3-4 cloves garlic, minced",
                "1-2 Scotch bonnet peppers (adjust to taste), chopped",
                "2 tbsp fresh thyme (or 1 tbsp dried)",
                "2 tbsp allspice (pimento) berries or ground allspice",
                "1 tsp cinnamon",
                "1 tsp nutmeg",
                "2 tbsp soy sauce",
                "2 tbsp brown sugar",
                "Juice of 1 lime",
                "Salt and pepper to taste",
                "For Cooking:",
                "2 cups beef or chicken broth",
                "1 can coconut milk (optional for richness)",
                "2 bay leaves"],
            description: ["Hey everyone! I just cooked up a batch of jerk oxtail, and let me tell you, it was out of this world! I had to share the recipe because it's a game changer. If you're a fan of bold flavors, this one’s for you."],
            instructions: ["Marinate the Oxtail: In a bowl, combine all the marinade ingredients. Toss the oxtail in there, making sure every piece is coated. Cover and refrigerate for at least 4 hours, but overnight is even better if you can swing it!",
                "Sear the Oxtail: Heat a large pot or Dutch oven over medium-high heat. Add a bit of oil and sear the marinated oxtail until browned on all sides. This step adds tons of flavor!",
                "Add Liquid: Once browned, add the broth, coconut milk (if using), and bay leaves. Bring to a boil, then reduce the heat to low.",
                "Simmer: Cover and let it simmer for about 2.5 to 3 hours, or until the oxtail is tender and falling off the bone. You might want to stir occasionally and check the liquid levels. If it gets too low, just add a splash more broth or water.",
                "Serve: I served mine over rice and peas, but you could also pair it with some fried plantains or a simple salad. The sauce is incredible, so don’t skip on that!"],
            tags: [],
            img: "https://i.redd.it/kaghi6m35vt31.jpg",
            votes: 0
        }
        localStorage.setItem('Delicious Jerk Oxtail Recipe!', JSON.stringify(Jerk_Oxtail))

        Pan_Fried_Salmon = {
            ingredients: ["2 salmon fillets (skin-on for extra crispiness)",
                "Salt and pepper, to taste",
                "1-2 tablespoons olive oil or butter",
                "1 lemon (zested and juiced)",
                "2 cloves garlic, minced",
                "Fresh herbs (like dill or parsley), for garnish",
                "Optional: a pinch of red pepper flakes for some heat"],
            description: ["Just cooked up a pan-fried salmon dish that turned out absolutely amazing, and I couldn't resist sharing the recipe with you all. If you love a quick, flavorful dinner, this one’s a must-try!"],
            instructions: ["Prepare the Salmon: Pat the salmon fillets dry with paper towels. Season both sides generously with salt and pepper.",
                "Heat the Pan: In a large skillet, heat the olive oil or butter over medium-high heat. You want it hot enough to get a good sear but not so hot that it smokes.",
                "Cook the Salmon: Place the salmon fillets skin-side down in the pan. Press down gently with a spatula for a few seconds to ensure the skin gets crispy. Cook for about 4-5 minutes, until the skin is golden brown and crispy.",
                "Flip and Flavor: Carefully flip the fillets and add the minced garlic to the pan. Cook for another 3-4 minutes, basting the salmon with the oil or butter. Squeeze in the lemon juice and add the lemon zest during the last minute of cooking for extra flavor.",
                "Serve: Once cooked through (it should flake easily with a fork), remove the salmon from the pan. Garnish with fresh herbs and, if you like, a sprinkle of red pepper flakes for a little kick."],
            tags: ["vegetarian"],
            img: ["https://stripedspatula.com/wp-content/uploads/2020/08/pan-seared-salmon-4.jpg"],
            votes: 0
        }
        localStorage.setItem('Perfectly Baked Salmon!', JSON.stringify(Pan_Fried_Salmon))

        California_Roll = {
            ingredients: ["For the Sushi Rice:",
                "1 cup sushi rice",
                "1 ¼ cups water",
                "2 tbsp rice vinegar",
                "1 tbsp sugar",
                "½ tsp salt",
                "For the Rolls:",
                "4 sheets nori (seaweed)",
                "1 ripe avocado, sliced",
                "1 cucumber, julienned",
                "½ cup imitation crab (or real crab if you’re feeling fancy)",
                "Soy sauce, for dipping",
                "Pickled ginger and wasabi, for serving (optional)"],
            description: ["Hey foodies! I had a sushi night at home and whipped up some delicious California rolls that turned out amazing! 🥑🍚 If you’re looking to impress your friends or just treat yourself, this is the way to go. Here’s how I made them!"],
            instructions: ["Prepare the Sushi Rice: Rinse the sushi rice under cold water until the water runs clear. Combine rice and water in a pot, bring to a boil, then reduce to low, cover, and simmer for about 18-20 minutes. Once done, let it sit for 10 minutes off the heat.",
                "Season the Rice: In a small bowl, mix rice vinegar, sugar, and salt until dissolved. Gently fold this mixture into the cooked rice and let it cool.",
                "Assemble the Rolls: Place a sheet of nori on a bamboo sushi mat (shiny side down). Wet your hands to prevent sticking and grab a handful of rice. Spread it evenly over the nori, leaving a 1-inch border at the top.",
                "Add Fillings: Lay slices of avocado, cucumber, and imitation crab in a line across the center of the rice.",
                "Roll It Up: Using the mat, carefully roll the sushi away from you, pressing gently but firmly. Seal the edge with a little water.",
                "Slice and Serve: With a sharp knife, slice the roll into bite-sized pieces. Serve with soy sauce, pickled ginger, and wasabi."],
            tags: [],
            img: ["https://feedmebetter.com/wp-content/uploads/2024/03/California-Roll-Recipe.jpg"],
            votes: 0
        }
        localStorage.setItem('Fresh California Roll!', JSON.stringify(California_Roll))

                
        Protein_Pancakes = {
            ingredients: ["1 cup rolled oats", "1 scoop protein powder", "1 teaspoon baking powder", "1/2 teaspoon cinnamon", "1 large egg", "1 cup milk", "1 teaspoon vanilla extract", "Cooking spray or oil"],
            description: ["Fluffy, delicious stacks of goodness that combine the indulgence of traditional pancakes with a powerful protein boost, making them the perfect fuel for a nutritious breakfast or post-workout treat."],
            instructions: ["Blend oats in a blender or food processor until they reach a flour-like consistency", 
                "In a mixing bowl, combine the oat flour, protein powder, baking powder, and cinnamon", 
                "In a separate bowl, whisk together the egg, milk, and vanilla extract until well combined",
                "Pour the wet mixture into the dry ingredients and stir until just combined. Avoid overmixing; a few lumps are okay",
                "Heat a non-stick skillet or griddle over medium heat and lightly grease with cooking spray or oil",
                "Pour about 1/4 cup of the batter onto the skillet for each pancake. Cook until bubbles form on the surface (about 2-3 minutes), then flip and cook for another 1-2 minutes until golden brown.",
                "Serve the pancakes warm with your favorite toppings, such as fresh fruit, maple syrup, yogurt, or nut butter."
            ],
            tags: ["high protein"],
            img: "https://pinchofyum.com/wp-content/uploads/Protein-Pancakes-Recipe.jpg",
            votes: 0
        }
        localStorage.setItem('Protein Pancake Delight!', JSON.stringify(Protein_Pancakes))


        Chicken_Fried_Rice = {
            ingredients: [
                "2 cups cooked rice (preferably day-old for best texture)",
                "1 cup cooked chicken, diced or shredded (leftover rotisserie chicken works great)",
                "2 large eggs",
                "2 tablespoons vegetable oil (or sesame oil for added flavor)",
                "1/2 cup onion, finely chopped",
                "1/2 cup frozen peas and carrots (or mixed vegetables of choice)",
                "2-3 green onions, sliced",
                "2-3 tablespoons soy sauce (adjust to taste)",
                "Salt and pepper (to taste)",
                "Optional: garlic, minced (1 clove)",
                "Optional: ginger, minced (1 teaspoon)]",],
            description: ["a savory, colorful dish where tender chicken and fluffy scrambled eggs mingle with vibrant vegetables and perfectly cooked rice, creating a satisfying meal that’s both comforting and bursting with flavor."],
            instructions: ["If using freshly cooked rice, spread it out on a baking sheet to cool and dry out a bit. Day-old rice works best as it’s less sticky.",                "In a small bowl, whisk the eggs with a pinch of salt.", "Heat 1 tablespoon of oil in a large skillet or wok over medium heat. Add the eggs and scramble until fully cooked. Remove from the pan and set aside.",
                "In the same skillet, add the remaining tablespoon of oil. Add the chopped onion (and garlic and ginger if using) and sauté until the onion is translucent.",
                "Add the frozen peas and carrots (or other vegetables) and cook for 2-3 minutes until heated through.",
                "Add the cooked chicken to the skillet and stir until heated through.",
                "Add the cooked rice, breaking up any clumps. Stir-fry for about 3-4 minutes until the rice is heated and slightly crispy.",
                "Add the scrambled eggs back to the skillet along with the soy sauce. Stir everything together to combine, and season with salt and pepper to taste.",
                "Add the sliced green onions and stir for another minute. Serve hot as a side dish or main course."],
            tags: [],
            img: "https://houseofnasheats.com/wp-content/uploads/2023/01/Chicken-Fried-Rice-Recipe-Square-1.jpg",
            votes: 0
            }
        localStorage.setItem('Savory Chicken Fried Rice!', JSON.stringify(Chicken_Fried_Rice))

        
        Mango_Parfait = {
            ingredients: ["2 ripe mangoes, peeled and diced",
                "2 cups Greek yogurt (plain or flavored, such as vanilla)",
                "1 cup granola (store-bought or homemade)",
                "1-2 tablespoons honey or maple syrup (optional, for sweetness)",
                "Mint leaves (for garnish, optional)"],
            description: ["A vibrant and refreshing delight, layering luscious, sweet mangoes with creamy Greek yogurt and crunchy granola, creating a beautiful and satisfying treat that bursts with tropical flavor in every bite."],
            instructions: ["Peel and dice the ripe mangoes into small cubes.",
                "If desired, sweeten the Greek yogurt with honey or maple syrup, mixing until smooth.",
                "In serving glasses or bowls, layer the ingredients starting with a layer of Greek yogurt, followed by a layer of diced mangoes, and then a layer of granola.",
                "Repeat the layers until the glasses are filled, finishing with a layer of mango on top.",
                "Garnish with a sprig of mint if desired. Serve immediately for a fresh and delicious treat!",
                ],
            tags: [],
            img: "https://www.marthastewart.com/thmb/2bYliWqldduPXbsxJW8O2l1y6Gg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/med105471_0410_mango_parfait_vert-91ac192c24614d91be03c09fb32b44bc.jpg",
            votes: 0
        }
        localStorage.setItem('Refreshing Mango Parfaits!', JSON.stringify(Mango_Parfait))

        Southern_Fried_Chicken = {
            ingredients: [
                "4 pieces of chicken (legs, thighs, breasts, or a mix)",
                "2 cups buttermilk (or regular milk with 2 tablespoons of vinegar or lemon juice)",
                "2 cups all-purpose flour",
                "1 tablespoon garlic powder",
                "1 tablespoon onion powder",
                "1 tablespoon paprika",
                "1 teaspoon cayenne pepper (optional, for heat)",
                "1 teaspoon salt (adjust to taste)",
                "1 teaspoon black pepper",
                "Vegetable oil (for frying)",],
            description: ["a mouthwatering Southern delight, featuring juicy, tender chicken coated in a crispy, golden-brown batter, delivering a satisfying crunch and savory flavor in every bite."],
            instructions: [
                "In a large bowl or zip-top bag, combine the chicken pieces and buttermilk. Ensure the chicken is fully submerged. Marinate for at least 2 hours or overnight in the refrigerator for best flavor and tenderness.",
                "In a shallow dish, combine the flour, garlic powder, onion powder, paprika, cayenne pepper, salt, and black pepper. Mix well.",
                "Remove the chicken pieces from the buttermilk, allowing excess to drip off. Dredge each piece in the flour mixture, ensuring it is evenly coated. Shake off any excess flour.",
                "In a large, deep skillet or Dutch oven, heat about 1 inch of vegetable oil over medium-high heat (approximately 350°F or 175°C). You can test the oil by dropping a small amount of flour into it; if it sizzles, its ready.",
                "Carefully add the coated chicken pieces to the hot oil, skin-side down. Fry in batches if necessary to avoid overcrowding. Cook for about 10-15 minutes on each side, or until the chicken is golden brown and reaches an internal temperature of 165°F (75°C).",
                "Once cooked, remove the chicken from the oil and place it on a plate lined with paper towels to drain excess oil."],
            tags: [],
            img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/50/69/49/picmuqFf3.jpg",
            votes: 0
        }
        localStorage.setItem('Ultimate Crispy Fried Chicken!', JSON.stringify(Southern_Fried_Chicken))
    }
}   

function showRecipes() {
    comRecipes = JSON.parse(localStorage.getItem('comRecipes'))

    const bigContainer = document.getElementById('bigContainer')

    let container
    let newContainer
    let recipeContainers
    let newName
    let newImg

    for (let i = 4; i < comRecipes.length; i++) {
        left = i * 2
        right = i * 2 + 1

        container = document.getElementById('firstRow')
        newContainer = container.cloneNode(true)

        console.log(newContainer)

        newName = comRecipes[i]

        let username = newContainer.querySelector('.username')
        username.textContent = "BigRed//Hacks"
        let title = newContainer.querySelector('.title')
        title.textContent = newName

        let description = newContainer.querySelector('.post-description')
        description.textContent = JSON.parse(localStorage.getItem(newName))['description']

        let date = newContainer.querySelector('.post-date')
        date.textContent = "Posted on: October 6, 2024"

        let comments = newContainer.querySelector('.comments')
        comments.textContent = "0 comments"
        comments.setAttribute('onclick', "openComments('comments5')")

        newContainer.querySelector('.try-now-button').setAttribute('onclick', 'goRecipe("' + newName + '")')
        newImg = JSON.parse(localStorage.getItem(newName))['img']
        newContainer.querySelector('img').src = newImg

        bigContainer.prepend(newContainer)
    }
}

function goRecipe(recipeURL) {
    window.location.href = 'recipe.html?name=' + encodeURIComponent(recipeURL)
}

initializeRecipes()
showRecipes()


const searchInput = document.getElementById('searchInput');
const dropdown = document.getElementById('dropdown');

comRecipes = JSON.parse(localStorage.getItem('comRecipes'))
comRecipes.forEach(recipe => {
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
