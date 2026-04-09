// ============================================
// NOURISH — Recipe Data & Interactivity
// ============================================

const recipes = [
  {
    id: 1,
    title: "Roasted Radish Farro Salad",
    category: "plant-based",
    tag: "Plant-Based",
    time: "35 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "A vibrant, hearty salad with caramelized roasted radishes, nutty farro, peppery arugula, and a bright lemon-tahini dressing. Perfect for a nourishing lunch or light dinner.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    ingredients: [
      "1 cup farro, rinsed",
      "2 bunches radishes, halved",
      "2 tbsp olive oil",
      "2 cups baby arugula",
      "¼ cup fresh mint leaves",
      "¼ cup crumbled feta",
      "3 tbsp tahini",
      "2 tbsp lemon juice",
      "1 tsp honey",
      "1 garlic clove, minced",
      "Salt and black pepper to taste"
    ],
    nutrition: [
      { value: "380", label: "Calories" },
      { value: "14g", label: "Protein" },
      { value: "52g", label: "Carbs" },
      { value: "15g", label: "Fat" }
    ],
    steps: [
      "Preheat your oven to 220°C (425°F). Line a baking sheet with parchment paper.",
      "Cook farro according to package instructions (usually 25–30 min in salted boiling water). Drain and spread on a tray to cool slightly.",
      "Toss halved radishes with 1 tbsp olive oil, salt, and pepper. Spread in a single layer on the baking sheet. Roast for 20–25 minutes, turning halfway, until golden and caramelised.",
      "Make the dressing: whisk together tahini, lemon juice, honey, minced garlic, 2–3 tbsp warm water, and remaining olive oil until smooth. Season with salt.",
      "In a large bowl, combine warm farro, roasted radishes, arugula, and mint. Drizzle with tahini dressing and toss gently.",
      "Plate the salad and top with crumbled feta. Serve immediately while the farro is still slightly warm."
    ]
  },
  {
    id: 2,
    title: "Chili Crisp Chicken Salad",
    category: "high-protein",
    tag: "High Protein",
    time: "25 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "Tender shredded chicken tossed in a spicy, garlicky chili crisp dressing over crunchy cabbage and cool cucumber. Bold flavors, satisfying crunch.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    ingredients: [
      "2 boneless chicken breasts",
      "3 cups shredded napa cabbage",
      "1 cucumber, thinly sliced",
      "2 spring onions, sliced",
      "¼ cup fresh cilantro",
      "2 tbsp chili crisp oil",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil",
      "1 tsp honey",
      "1 tbsp toasted sesame seeds"
    ],
    nutrition: [
      { value: "320", label: "Calories" },
      { value: "38g", label: "Protein" },
      { value: "12g", label: "Carbs" },
      { value: "14g", label: "Fat" }
    ],
    steps: [
      "Poach the chicken: place breasts in a saucepan, cover with cold water, add a pinch of salt and a slice of ginger. Bring to a boil, reduce heat, and simmer for 12–14 minutes until cooked through.",
      "Remove chicken from water and let cool for 5 minutes. Use two forks to shred it into thin strips.",
      "While chicken cooks, whisk together chili crisp, soy sauce, rice vinegar, sesame oil, and honey in a large bowl.",
      "Add shredded chicken to the dressing and toss to coat well.",
      "Layer the napa cabbage and cucumber on a serving platter or in bowls.",
      "Pile the chili crisp chicken on top. Garnish with spring onions, cilantro, and sesame seeds. Serve immediately."
    ]
  },
  {
    id: 3,
    title: "Cod Florentine",
    category: "heart-healthy",
    tag: "Heart Healthy",
    time: "30 min",
    servings: "2 servings",
    difficulty: "Medium",
    description: "Flaky pan-seared cod fillets nestled on a bed of garlicky creamed spinach. A classic Italian-inspired dish that is elegant, light, and deeply satisfying.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    ingredients: [
      "2 cod fillets (about 200g each)",
      "400g fresh spinach",
      "3 garlic cloves, minced",
      "1 shallot, finely diced",
      "150ml double cream",
      "2 tbsp olive oil",
      "1 tbsp butter",
      "¼ tsp freshly grated nutmeg",
      "Juice of ½ lemon",
      "Salt and white pepper to taste",
      "Fresh dill to garnish"
    ],
    nutrition: [
      { value: "390", label: "Calories" },
      { value: "42g", label: "Protein" },
      { value: "8g", label: "Carbs" },
      { value: "22g", label: "Fat" }
    ],
    steps: [
      "Pat cod fillets dry with paper towels. Season generously on both sides with salt and white pepper.",
      "Heat olive oil in a large non-stick skillet over medium-high heat. Add cod skin-side down and press gently. Cook for 4–5 minutes until golden and crisp. Flip and cook for a further 2–3 minutes. Remove and set aside.",
      "In the same pan, reduce heat to medium. Add butter, shallot, and garlic. Sauté for 2 minutes until softened and fragrant.",
      "Add spinach in batches, stirring until wilted (about 2–3 minutes).",
      "Pour in the double cream, add nutmeg, and stir. Simmer for 3–4 minutes until the sauce thickens slightly. Season with salt, pepper, and a squeeze of lemon.",
      "Divide the creamed spinach between plates and place a cod fillet on top. Garnish with fresh dill and serve with crusty bread or rice."
    ]
  },
  {
    id: 4,
    title: "Green Curry Chicken Thighs",
    category: "high-protein",
    tag: "High Protein",
    time: "40 min",
    servings: "4 servings",
    difficulty: "Medium",
    description: "Aromatic, fragrant Thai green curry with tender bone-in chicken thighs, creamy coconut milk, fresh vegetables, and a vibrant herbaceous sauce.",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    ingredients: [
      "4 bone-in chicken thighs",
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "1 cup chicken stock",
      "1 zucchini, sliced",
      "1 cup green beans, trimmed",
      "1 red bell pepper, sliced",
      "2 kaffir lime leaves",
      "1 tbsp fish sauce",
      "1 tsp palm sugar (or brown sugar)",
      "Fresh Thai basil and lime to serve",
      "Steamed jasmine rice to serve"
    ],
    nutrition: [
      { value: "520", label: "Calories" },
      { value: "36g", label: "Protein" },
      { value: "18g", label: "Carbs" },
      { value: "34g", label: "Fat" }
    ],
    steps: [
      "Season chicken thighs with salt and pepper. Heat a splash of oil in a heavy-based pot over medium-high heat. Sear thighs skin-side down for 5–6 minutes until golden. Flip and cook 2 more minutes. Remove and set aside.",
      "In the same pot, add green curry paste and stir-fry for 1–2 minutes until very fragrant.",
      "Pour in the thick part of the coconut milk, stirring it into the paste. Let it bubble for 2 minutes.",
      "Add the remaining coconut milk, chicken stock, kaffir lime leaves, fish sauce, and sugar. Stir to combine.",
      "Return the chicken to the pot. Bring to a boil, then reduce to a gentle simmer. Cover and cook for 20 minutes.",
      "Add zucchini, green beans, and bell pepper. Cook uncovered for 6–8 minutes until vegetables are tender and chicken is cooked through.",
      "Taste and adjust seasoning with fish sauce or sugar. Serve over jasmine rice, topped with Thai basil and a wedge of lime."
    ]
  },
  {
    id: 5,
    title: "Mushroom Stroganoff",
    category: "plant-based",
    tag: "Plant-Based",
    time: "30 min",
    servings: "3 servings",
    difficulty: "Easy",
    description: "A rich, creamy plant-based stroganoff loaded with earthy mixed mushrooms, sweet caramelized onions, and a tangy sour cream sauce — comfort food at its finest.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    ingredients: [
      "500g mixed mushrooms (cremini, shiitake, oyster)",
      "1 large onion, thinly sliced",
      "3 garlic cloves, minced",
      "200ml vegetable stock",
      "150ml plant-based sour cream",
      "2 tbsp olive oil",
      "1 tbsp soy sauce",
      "1 tsp smoked paprika",
      "1 tsp Dijon mustard",
      "Fresh thyme leaves",
      "Egg-free pasta or egg noodles to serve",
      "Fresh parsley to garnish"
    ],
    nutrition: [
      { value: "350", label: "Calories" },
      { value: "10g", label: "Protein" },
      { value: "48g", label: "Carbs" },
      { value: "14g", label: "Fat" }
    ],
    steps: [
      "Cook pasta according to package instructions in well-salted boiling water. Drain, reserving a cup of pasta water.",
      "Heat olive oil in a large wide pan over medium heat. Add sliced onion with a pinch of salt. Cook, stirring often, for 10–12 minutes until golden and caramelised.",
      "Add garlic and thyme, cook for 1 minute. Increase heat to high, add mushrooms in a single layer. Do not stir for 2–3 minutes to allow them to brown. Then toss and continue cooking for 5 minutes until golden.",
      "Stir in smoked paprika, soy sauce, and Dijon mustard.",
      "Pour in vegetable stock and let it bubble and reduce by half, about 3 minutes.",
      "Reduce heat to low. Stir in sour cream and mix gently until the sauce is smooth and creamy. Do not boil after adding sour cream.",
      "Toss the cooked pasta into the stroganoff, adding a splash of pasta water if needed. Serve topped with fresh parsley."
    ]
  },
  {
    id: 6,
    title: "Beet & Berry Pancakes",
    category: "gut-health",
    tag: "Gut Health",
    time: "20 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "Fluffy, naturally pink pancakes made with roasted beet puree and topped with a warm mixed berry compote. A show-stopping, antioxidant-rich breakfast.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80",
    ingredients: [
      "1 medium cooked beet, pureed",
      "1 cup all-purpose flour",
      "1 tbsp baking powder",
      "1 tbsp sugar",
      "¼ tsp salt",
      "1 cup oat milk",
      "1 egg",
      "2 tbsp melted butter",
      "1 cup mixed berries (fresh or frozen)",
      "2 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Greek yoghurt to serve"
    ],
    nutrition: [
      { value: "420", label: "Calories" },
      { value: "10g", label: "Protein" },
      { value: "72g", label: "Carbs" },
      { value: "12g", label: "Fat" }
    ],
    steps: [
      "Make the berry compote: combine berries and maple syrup in a small saucepan over medium heat. Cook for 5–7 minutes, stirring occasionally, until berries burst and the mixture thickens slightly. Set aside.",
      "In a large bowl, whisk flour, baking powder, sugar, and salt together.",
      "In a separate bowl, whisk oat milk, egg, melted butter, vanilla, and beet puree until smooth. The batter will be vibrant pink.",
      "Pour wet ingredients into dry and fold gently until just combined. Do not overmix — a few lumps are fine.",
      "Heat a non-stick pan over medium heat and brush lightly with butter. Pour ¼ cup of batter per pancake. Cook until bubbles form on the surface (about 2 minutes), then flip and cook for 1 more minute.",
      "Stack pancakes, spoon over warm berry compote, and add a dollop of Greek yoghurt. Serve immediately."
    ]
  },
  {
    id: 7,
    title: "Quinoa Buddha Bowl",
    category: "plant-based",
    tag: "Plant-Based",
    time: "35 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "A nourishing bowl of fluffy quinoa, crispy roasted chickpeas, rainbow vegetables, creamy avocado, and a zesty miso-ginger dressing.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
    ingredients: [
      "1 cup quinoa, rinsed",
      "1 can chickpeas, drained and rinsed",
      "1 sweet potato, diced",
      "1 cup purple cabbage, shredded",
      "1 avocado, sliced",
      "1 cup edamame, shelled",
      "2 tbsp olive oil",
      "1 tbsp white miso paste",
      "1 tbsp fresh ginger, grated",
      "2 tbsp rice vinegar",
      "1 tbsp soy sauce",
      "1 tsp sesame oil",
      "Sesame seeds and microgreens to serve"
    ],
    nutrition: [
      { value: "580", label: "Calories" },
      { value: "22g", label: "Protein" },
      { value: "68g", label: "Carbs" },
      { value: "26g", label: "Fat" }
    ],
    steps: [
      "Preheat oven to 210°C (410°F). Cook quinoa: bring 2 cups water to a boil with a pinch of salt, add quinoa, reduce heat, cover and simmer for 15 minutes. Remove from heat and let steam for 5 minutes, then fluff with a fork.",
      "Toss diced sweet potato and chickpeas separately with olive oil, salt, and pepper. Spread on a lined baking tray. Roast for 25–30 minutes, turning once, until sweet potato is tender and chickpeas are crispy.",
      "Make the miso-ginger dressing: whisk miso paste, grated ginger, rice vinegar, soy sauce, sesame oil, and 2 tbsp warm water until smooth.",
      "Assemble the bowls: divide quinoa between two bowls. Arrange sweet potato, crispy chickpeas, shredded cabbage, edamame, and avocado slices on top.",
      "Drizzle generously with miso-ginger dressing. Finish with sesame seeds and microgreens. Serve immediately."
    ]
  },
  {
    id: 8,
    title: "Lemon Herb Baked Salmon",
    category: "heart-healthy",
    tag: "Heart Healthy",
    time: "25 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "Perfectly baked salmon fillets with a fragrant herb crust, bright lemon, and a drizzle of garlic butter. Simple, omega-3 rich, and ready in under 30 minutes.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    ingredients: [
      "2 salmon fillets (180g each)",
      "2 tbsp fresh dill, chopped",
      "2 tbsp fresh parsley, chopped",
      "2 garlic cloves, minced",
      "Zest and juice of 1 lemon",
      "2 tbsp olive oil",
      "1 tbsp butter",
      "1 tsp honey",
      "Salt and black pepper",
      "Capers and lemon slices to garnish",
      "Asparagus or green beans to serve"
    ],
    nutrition: [
      { value: "410", label: "Calories" },
      { value: "40g", label: "Protein" },
      { value: "4g", label: "Carbs" },
      { value: "26g", label: "Fat" }
    ],
    steps: [
      "Preheat oven to 200°C (400°F). Line a baking dish with parchment paper.",
      "Mix together the dill, parsley, garlic, lemon zest, olive oil, honey, salt, and pepper in a small bowl to form a herb paste.",
      "Place salmon fillets skin-side down in the baking dish. Spread the herb paste generously over the top of each fillet.",
      "Place a thin slice of butter on top of each fillet and arrange lemon slices around the fish.",
      "Bake for 12–15 minutes depending on thickness, until the salmon is opaque and flakes easily with a fork. Do not overcook.",
      "Remove from oven, squeeze fresh lemon juice over the top, and scatter capers. Serve alongside steamed asparagus or green beans."
    ]
  },
  {
    id: 9,
    title: "Black Bean Tacos with Mango Salsa",
    category: "plant-based",
    tag: "Plant-Based",
    time: "20 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "Smoky spiced black bean tacos topped with a fresh mango salsa, crunchy slaw, and cool chipotle crema. Weeknight dinner perfection in 20 minutes.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
    ingredients: [
      "1 can black beans, drained",
      "6 small corn tortillas",
      "1 ripe mango, diced",
      "½ red onion, finely diced",
      "1 jalapeño, seeded and minced",
      "Juice of 1 lime",
      "¼ cup fresh cilantro",
      "1 cup purple cabbage, shredded",
      "1 tsp smoked paprika",
      "1 tsp cumin",
      "½ tsp garlic powder",
      "3 tbsp sour cream",
      "1 tsp chipotle in adobo, minced"
    ],
    nutrition: [
      { value: "440", label: "Calories" },
      { value: "16g", label: "Protein" },
      { value: "78g", label: "Carbs" },
      { value: "10g", label: "Fat" }
    ],
    steps: [
      "Make the mango salsa: combine diced mango, half the red onion, jalapeño, half the lime juice, and cilantro. Season with salt and set aside to marinate.",
      "Make the chipotle crema: mix sour cream with minced chipotle and a pinch of salt until smooth. Set aside.",
      "Season the black beans: heat a splash of oil in a skillet over medium heat. Add remaining red onion and cook 2 minutes. Add beans, smoked paprika, cumin, garlic powder, and a splash of water. Cook 4–5 minutes, mashing some beans lightly to thicken.",
      "Toss shredded cabbage with remaining lime juice and a pinch of salt to make a quick slaw.",
      "Warm the tortillas: place directly over a gas flame for 20 seconds per side, or dry-toast in a pan.",
      "Assemble the tacos: spoon black beans onto each tortilla, top with mango salsa and cabbage slaw. Drizzle with chipotle crema. Serve immediately."
    ]
  },
  {
    id: 10,
    title: "Overnight Oats with Chia",
    category: "gut-health",
    tag: "Gut Health",
    time: "5 min + overnight",
    servings: "1 serving",
    difficulty: "Easy",
    description: "Creamy overnight oats packed with chia seeds, fresh fruit, and a drizzle of nut butter. Prepare the night before for a ready-in-seconds, fiber-rich breakfast.",
    image: "https://images.unsplash.com/photo-1586040140758-e1bcc7e57a6d?w=800&q=80",
    ingredients: [
      "½ cup rolled oats",
      "1 tbsp chia seeds",
      "¾ cup oat milk (or any milk)",
      "¼ cup Greek yoghurt",
      "1 tbsp maple syrup",
      "½ tsp vanilla extract",
      "½ cup mixed berries",
      "1 tbsp almond or peanut butter",
      "1 tbsp granola",
      "Pinch of cinnamon"
    ],
    nutrition: [
      { value: "420", label: "Calories" },
      { value: "16g", label: "Protein" },
      { value: "58g", label: "Carbs" },
      { value: "14g", label: "Fat" }
    ],
    steps: [
      "In a jar or container with a lid, combine rolled oats, chia seeds, milk, Greek yoghurt, maple syrup, vanilla, and cinnamon.",
      "Stir well to ensure everything is combined and no dry oats remain at the bottom.",
      "Seal the jar and refrigerate overnight (or for at least 6 hours). The oats and chia seeds will absorb the liquid and thicken.",
      "In the morning, give the oats a stir. Add a splash more milk if you prefer a thinner consistency.",
      "Top with fresh mixed berries, a drizzle of nut butter, and granola for crunch. Enjoy cold directly from the jar."
    ]
  },
  {
    id: 11,
    title: "Spinach & Feta Stuffed Chicken",
    category: "low-carb",
    tag: "Low Carb",
    time: "40 min",
    servings: "2 servings",
    difficulty: "Medium",
    description: "Juicy chicken breasts stuffed with a savory spinach, feta, and sun-dried tomato filling. A low-carb, high-protein dinner that looks impressive but is simple to make.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=800&q=80",
    ingredients: [
      "2 large chicken breasts",
      "150g fresh spinach",
      "80g feta cheese, crumbled",
      "3 sun-dried tomatoes, chopped",
      "2 garlic cloves, minced",
      "1 tbsp olive oil",
      "1 tsp Italian seasoning",
      "½ tsp red pepper flakes",
      "Salt and black pepper",
      "Toothpicks or kitchen twine",
      "Lemon wedges to serve"
    ],
    nutrition: [
      { value: "380", label: "Calories" },
      { value: "52g", label: "Protein" },
      { value: "5g", label: "Carbs" },
      { value: "18g", label: "Fat" }
    ],
    steps: [
      "Preheat oven to 200°C (400°F). Make the filling: heat a drizzle of oil in a pan, sauté garlic for 30 seconds, add spinach and cook until wilted. Squeeze out excess moisture, then mix with feta, sun-dried tomatoes, red pepper flakes, salt, and pepper.",
      "Prepare the chicken: using a sharp knife, cut a deep horizontal pocket into the thickest part of each chicken breast — be careful not to cut all the way through.",
      "Season the outside of each breast generously with Italian seasoning, salt, and pepper.",
      "Spoon the spinach-feta filling into each pocket, pressing it in firmly. Secure the opening with toothpicks or tie with kitchen twine.",
      "Heat olive oil in an oven-safe skillet over medium-high heat. Sear the stuffed chicken for 3–4 minutes per side until golden.",
      "Transfer the skillet to the oven and bake for 18–20 minutes until cooked through (internal temperature 74°C / 165°F). Rest for 5 minutes, remove toothpicks, and serve with lemon wedges."
    ]
  },
  {
    id: 12,
    title: "Diabetes-Friendly Cauliflower Fried Rice",
    category: "diabetes",
    tag: "Diabetes-Friendly",
    time: "20 min",
    servings: "2 servings",
    difficulty: "Easy",
    description: "A clever low-glycaemic twist on fried rice using riced cauliflower, colorful vegetables, and eggs. All the satisfaction of takeaway — without the blood sugar spike.",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=800&q=80",
    ingredients: [
      "1 medium cauliflower, riced (or 400g pre-riced)",
      "3 eggs, lightly beaten",
      "1 cup frozen peas and carrots",
      "3 spring onions, sliced",
      "2 garlic cloves, minced",
      "1 tsp fresh ginger, grated",
      "2 tbsp low-sodium soy sauce",
      "1 tbsp sesame oil",
      "1 tbsp vegetable oil",
      "½ tsp white pepper",
      "Sesame seeds and chili flakes to garnish"
    ],
    nutrition: [
      { value: "260", label: "Calories" },
      { value: "14g", label: "Protein" },
      { value: "22g", label: "Carbs" },
      { value: "14g", label: "Fat" }
    ],
    steps: [
      "Rice the cauliflower: cut into florets and pulse in a food processor until it resembles rice grains. Alternatively, grate on a box grater. Spread on a clean kitchen towel and squeeze out as much moisture as possible — this is key to avoid soggy 'rice'.",
      "Heat vegetable oil in a large wok or skillet over high heat until smoking. Add garlic and ginger, stir-fry for 30 seconds.",
      "Add frozen peas and carrots. Stir-fry for 2–3 minutes until heated through.",
      "Push vegetables to one side. Add the beaten eggs to the empty side and scramble quickly until just set, then stir everything together.",
      "Add the cauliflower rice and toss everything together over high heat for 3–4 minutes until the cauliflower is tender but not mushy.",
      "Drizzle with soy sauce and sesame oil. Toss well, taste, and adjust seasoning. Serve topped with spring onions, sesame seeds, and chili flakes."
    ]
  }
];

// ============================================
// STATE
// ============================================
let currentCategory = 'all';
let currentSearch = '';

// ============================================
// RENDER RECIPES
// ============================================
function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  const countEl = document.getElementById('recipeCount');

  let filtered = recipes;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(r => r.category === currentCategory);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tag.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.ingredients.some(i => i.toLowerCase().includes(q)) ||
      r.steps.some(s => s.toLowerCase().includes(q))
    );
  }

  countEl.textContent = `${filtered.length} recipe${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <h3>No recipes found</h3>
        <p>Try a different category or search term.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(recipe => `
    <article class="recipe-card" onclick="openModal(${recipe.id})" tabindex="0"
      onkeydown="if(event.key==='Enter') openModal(${recipe.id})">
      <div class="card-image-wrap">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
        <span class="card-tag">${recipe.tag}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>&#9201; ${recipe.time}</span>
          <span>&#127859; ${recipe.servings}</span>
        </div>
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-desc">${recipe.description}</p>
      </div>
    </article>
  `).join('');
}

// ============================================
// MODAL
// ============================================
function openModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  document.getElementById('modalImage').src = recipe.image;
  document.getElementById('modalImage').alt = recipe.title;
  document.getElementById('modalTag').textContent = recipe.tag;
  document.getElementById('modalTitle').textContent = recipe.title;
  document.getElementById('modalDesc').textContent = recipe.description;
  document.getElementById('modalTime').textContent = `⏱ ${recipe.time}`;
  document.getElementById('modalServings').textContent = `🍽 ${recipe.servings}`;
  document.getElementById('modalDiff').textContent = `⭐ ${recipe.difficulty}`;

  document.getElementById('modalIngredients').innerHTML =
    recipe.ingredients.map(i => `<li>${i}</li>`).join('');

  document.getElementById('modalNutrition').innerHTML =
    recipe.nutrition.map(n => `
      <div class="nutrition-item">
        <span class="value">${n.value}</span>
        <span class="label">${n.label}</span>
      </div>
    `).join('');

  document.getElementById('modalSteps').innerHTML =
    recipe.steps.map(s => `<li>${s}</li>`).join('');

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================
// FILTERS
// ============================================
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderRecipes();
  });
});

// ============================================
// SEARCH
// ============================================
function handleSearch() {
  currentSearch = document.getElementById('searchInput').value;
  renderRecipes();
  document.querySelector('.main').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

document.getElementById('searchInput').addEventListener('input', e => {
  currentSearch = e.target.value;
  renderRecipes();
  if (e.target.value === '') {
    currentSearch = '';
    renderRecipes();
  }
});

// ============================================
// INIT
// ============================================
renderRecipes();
