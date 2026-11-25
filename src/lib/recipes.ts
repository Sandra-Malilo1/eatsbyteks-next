/* Images live in public/assets, so they are plain paths (no imports). */
const A = (file: string) => `/assets/${file}`;
export type Recipe = {
  id: number
  slug?: string
  title: string
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Dessert' |  'Baked Goods' |'Salad'
  time: string
  image: string
  description: string
  ingredients: string[]
  method: string
  seoTitle?: string
  seoDescription?: string
}

export const recipes: Recipe[] = [

  {
    id: 7,
    title: "Green Goddess Pasta with Tomatoes Recipe | EatsByTeks",
    seoTitle: "Green Goddess Pasta with Tomatoes - EatsByTeks",
    seoDescription: "Learn how to make this bright, herby pasta with juicy tomatoes and parmesan.",
    category: "Lunch",
    time: "25 min",
    image: A("pesto-fusilli.jpeg"),
    description:
      "A bright, herby pasta with cherry tomatoes, spinach, basil and parmesan. A quick lunch recipe with step-by-step instructions",
    ingredients: [
      "Fusilli pasta",
      "Cherry tomatoes",
      "Baby spinach",
      "Fresh basil",
      "Parmesan",
      "Olive oil",
      "Garlic",
    ],
    method:
      "Cook the pasta in salted water until al dente, saving a mug of the cooking water. Sizzle garlic in olive oil, then toss in the tomatoes until softened. Add the spinach, basil and pasta with a splash of cooking water, and finish with grated parmesan.",
  },
  {
    id: 8,
    title: "Chimichurri Steak and Parmesan Fries Recipe | EatsByTeks",
    seoTitle: "Chimichurri Steak and Parmesan Fries - EatsByTeks",
    seoDescription: "Learn how to make this delicious steak and fries dish with a punchy green herb sauce.",
    category: "Dinner",
    time: "45 min",
    image: A("steak-fries.jpeg"),
    description:
      "Seared steak with homemade chimichurri and crispy oven-roasted parmesan fries. A simple dinner recipe with clear steps.",
    ingredients: [
      "Steak",
      "Potatoes",
      "Parmesan",
      "Flat-leaf parsley",
      "Garlic",
      "Red wine vinegar",
      "Olive oil",
    ],
    method:
      "Cut the potatoes into fries, toss with oil and roast at 220°C until crisp, then scatter over parmesan. Finely chop the parsley and garlic and mix with vinegar and olive oil for the chimichurri. Season and sear the steak to your liking, rest it, then slice and serve with the fries and sauce.",
  },
  {
    id: 9,
    title: "Glazed Chicken with Sweet Potato Mash Recipe | EatsByTeks",
    seoTitle: "Glazed Chicken with Sweet Potato Mash - EatsByTeks",
    seoDescription: "Learn how to make this juicy roasted chicken with silky sweet potato mash and tender green vegetables.",
    category: "Dinner",
    time: "40 min",
    image: A("roasted-chicken.jpeg"),
    description:
      "Honey-glazed roast chicken with buttery sweet potato mash, carrots and green beans. A complete dinner recipe with step-by-step instructions.",
    ingredients: [
      "Chicken thighs",
      "Sweet potatoes",
      "Carrots",
      "Green beans",
      "Honey",
      "Butter",
      "Smoked paprika",
    ],
    method:
      "Rub the chicken with paprika and a little oil, then roast at 200°C until cooked through, brushing with honey near the end. Boil the sweet potatoes until tender and mash with butter. Roast the carrots and briefly steam the green beans, then serve everything together with the pan juices.",
  },
  {
    id: 10,
    title: "Crispy Potatoes with Herby Dressing Recipe | EatsByTeks",
    seoTitle: "Crispy Potatoes with Herby Dressing - EatsByTeks",
    seoDescription: "Learn how to make these golden-edged potatoes with a lively, garlicky herb dressing.",
    category: "Lunch",
    time: "40 min",
    image: A("spiced-potatoes.jpeg"),
    description:
      "Crispy roasted baby potatoes tossed in a garlicky parsley, lemon and chilli dressing. An easy side or lunch recipe..",
    ingredients: [
      "Baby potatoes",
      "Flat-leaf parsley",
      "Garlic",
      "Olive oil",
      "Lemon",
      "Chilli flakes",
    ],
    method:
      "Parboil the potatoes until just tender, drain well and rough up their edges. Roast with olive oil at 220°C until golden and crisp. Mix chopped parsley, garlic, lemon juice and chilli flakes, then spoon over the hot potatoes.",
  },
  {
    id: 11,
    title: "Sticky Beef & Peppers Rice Bowl Recipe | EatsByTeks",
    seoTitle: "Sticky Beef & Peppers Rice Bowl - EatsByTeks",
    seoDescription: "Learn how to make this flavorful beef and pepper rice bowl with a sweet and savory glaze.",
    category: "Dinner",
    time: "30 min",
    image: A("sesame-beef-stirfry.jpeg"),
    description:
      "Quick beef stir-fry with red peppers and green beans, glazed with soy and honey and served over rice with sesame seeds. Ready in 30 minutes.",
    ingredients: [
      "Beef strips",
      "Rice",
      "Red peppers",
      "Green beans",
      "Soy sauce",
      "Honey",
      "Sesame seeds",
    ],
    method:
      "Cook the rice according to the packet. Sear the beef quickly in a hot pan and set aside, then stir-fry the peppers and green beans. Return the beef with soy sauce and honey, toss until glossy and serve over rice with sesame seeds.",
  },
  {
    id: 12,
    title: "Sticky Date Pudding with Vanilla Ice Cream Recipe | EatsByTeks",
    seoTitle: "Sticky Date Pudding with Vanilla Ice Cream - EatsByTeks",
    seoDescription: "Learn how to make this rich, sticky date pudding with a creamy vanilla ice cream topping.",
    category: "Dessert",
    time: "55 min",
    image: A("sticky-toffee-pudding.jpeg"),
    description:
      "Soft, sticky date pudding baked in ramekins and served warm with vanilla ice cream. An easy dessert with step-by-step instructions.",
    ingredients: [
      "Pitted dates",
      "Plain flour",
      "Brown sugar",
      "Butter",
      "Eggs",
      "Baking soda",
      "Vanilla ice cream",
    ],
    method:
      "Soak chopped dates in hot water with baking soda until soft. Cream butter and sugar, beat in the eggs, then fold in flour and the dates. Bake in greased ramekins at 180°C until a skewer comes out clean, and serve warm with vanilla ice cream.",
  },
  {
    id: 13,
    title: "Creamy Chicken with Asparagus Recipe | EatsByTeks",
    seoTitle: "Creamy Chicken with Asparagus - EatsByTeks",
    seoDescription: "Learn how to make this golden chicken in a savoury cream sauce with asparagus and buttery mash.",
    category: "Dinner",
    time: "35 min",
    image: A("seared-chicken-breast.jpeg"),
    description:
      "Seared chicken breasts in a creamy shallot and paprika sauce, served with asparagus and buttery mash. An easy chicken and asparagus dinner.",
    ingredients: [
      "Chicken breasts",
      "Asparagus",
      "Potatoes",
      "Cream",
      "Shallot",
      "Smoked paprika",
      "Butter",
    ],
    method:
      "Boil the potatoes and mash with butter. Season the chicken with paprika and sear until golden and cooked through. Soften the shallot, add cream and simmer briefly; steam the asparagus and serve everything with the sauce.",
  },
  {
    id: 14,
    title: "Creamy Mushroom Tagliatelle Recipe | EatsByTeks",
    seoTitle: "Creamy Mushroom Tagliatelle - EatsByTeks",
    seoDescription: "Learn how to make this creamy mushroom tagliatelle with a rich, velvety sauce.",
    category: "Dinner",
    time: "30 min",
    image: A("mushroom.jpeg"),
    description:
      "Tagliatelle with golden mushrooms, garlic, thyme and parmesan in a silky cream sauce. A quick dinner ready in 30 minutes.",
    ingredients: [
      "Tagliatelle",
      "Mushrooms",
      "Garlic",
      "Cream",
      "Parmesan",
      "Fresh thyme",
    ],
    method:
      "Cook the tagliatelle until al dente, reserving some pasta water. Brown the mushrooms in a wide pan, then stir in garlic and thyme. Add cream and a splash of pasta water, toss with the pasta and finish with parmesan.",
  },
  {
    id: 1,
    title: "Homemade Cheeseburger Recipe with Burger Sauce | EatsByTeks",
    seoTitle: "Homemade Cheeseburger Recipe with Burger Sauce - EatsByTeks",
    seoDescription: "Learn how to make this juicy, feel-good cheeseburger with a delicious homemade burger sauce.",
    category: "Dinner",
    time: "35 min",
    image: A("hero-burger.jpg"),
    description:
      "A juicy homemade cheeseburger with melted cheddar, lettuce, tomato, red onion and burger sauce on toasted brioche buns.",
    ingredients: [
      "Brioche buns",
      "Ground beef",
      "Cheddar",
      "Lettuce & tomato",
      "Red onion",
      "Burger sauce",
    ],
    method:
      "Season and sear the patties until golden. Melt the cheddar on top, toast the buns, then layer with sauce and fresh vegetables.",
  },
  {
    id: 2,
    title: "Creamy Tomato and Basil Pasta Recipe | EatsByTeks",
    seoTitle: "Creamy Tomato and Basil Pasta - EatsByTeks",
    seoDescription: "Learn how to make this creamy tomato and basil pasta with a rich, velvety sauce.",
    category: "Dinner",
    time: "25 min",
    image: A("spaghetti.jpeg"),
    description:
      "Penne with garlic, cherry tomatoes, cream, basil and parmesan. A simple weeknight pasta ready in about 25 minutes.",
    ingredients: [
      "Penne pasta",
      "Cherry tomatoes",
      "Cream",
      "Garlic",
      "Fresh basil",
      "Parmesan",
    ],
    method:
      "Cook the pasta until al dente. Simmer garlic and tomatoes, stir in cream, then toss everything together with basil and parmesan.",
  },
  {
    id: 3,
    title: "Strawberry Sponge Cake with Cream Recipe | EatsByTeks",
    seoTitle: "Strawberry Sponge Cake with Cream - EatsByTeks",
    seoDescription: "Learn how to make this moist and delicious strawberry sponge cake with a luscious cream filling.",
    category: "Dessert",
    time: "1 hr 15 min",
    image: A("recipe-cake.jpg"),
    description:
      "Light vanilla sponge layered with whipped strawberry cream and fresh berries. A step-by-step strawberry cake recipe.",
    ingredients: [
      "Vanilla sponge",
      "Fresh strawberries",
      "Whipping cream",
      "Sugar",
      "Vanilla",
    ],
    method:
      "Layer cooled sponge with whipped strawberry cream and sliced berries. Chill before slicing and top with more fresh strawberries.",
  },
  {
    id: 4,
    title: "Green Goddess Chicken Bowl Recipe | EatsByTeks",
    seoTitle: "Green Goddess Chicken Bowl - EatsByTeks",
    seoDescription: "Learn how to make this fresh, filling chicken bowl with a generous amount of herby dressing.",
    category: "Baked Goods",
    time: "30 min",
    image: A("recipe-bowl.jpg"),
    description:
      "A filling bowl of chicken, grains, avocado and roasted vegetables with a fresh herb dressing. An easy lunch recipe.",
    ingredients: [
      "Chicken breast",
      "Grains",
      "Avocado",
      "Roasted vegetables",
      "Mixed greens",
      "Herb dressing",
    ],
    method:
      "Roast the vegetables and cook the chicken. Assemble with warm grains, greens and avocado, then spoon over the herb dressing.",
  },
  {
    id: 5,
    title: "Beef Burger Recipe with Cheese and Fresh Toppings | EatsByTeks",
    seoTitle: "Beef Burger Recipe with Cheese and Fresh Toppings - EatsByTeks",
    seoDescription: "Learn how to make this juicy beef burger with melted cheese and fresh toppings.",
    category: "Lunch",
    time: "40 min",
    image: A("hero-burger.jpg"),
    description:
      "A simple beef burger with melted cheese, tomatoes and lettuce on toasted brioche buns. An easy relaxed lunch.",
    ingredients: [
      "Brioche buns",
      "Beef patties",
      "Cheese",
      "Tomatoes",
      "Lettuce",
    ],
    method:
      "Sear patties, toast the buns and stack generously with your favorite toppings.",
  },
  {
    id: 6,
    title: "Simple Tomato Pasta with Basil and Parmesan Recipe | EatsByTeks",
    seoTitle: "Simple Tomato Pasta with Basil and Parmesan - EatsByTeks",
    seoDescription: "Learn how to make this easy tomato pasta with garlic, basil and parmesan.",
    category: "Dinner",
    time: "30 min",
    image: A("recipe-pasta.jpg"),
    description:
      "An easy tomato pasta with garlic, basil and parmesan, with a simple sauce that comes together in 30 minutes.",
    ingredients: ["Pasta", "Tomatoes", "Garlic", "Basil", "Parmesan"],
    method:
      "Cook pasta and simmer tomatoes with garlic. Toss together and finish with basil and parmesan.",
  },
  {
    id: 15,
    title: "Fresh Fruit Salad Recipe with Lime and Honey | EatsByTeks",
    seoTitle: "Fresh Fruit Salad with Lime and Honey - EatsByTeks",
    seoDescription: "Learn how to make this refreshing fruit salad with a zesty lime and honey dressing.",
    category: "Breakfast",
    time: "10 min",
    image: A("fuit-salad.jpeg"),
    description:
      "Seasonal fruit tossed with lime, honey and fresh mint, served with natural yoghurt. A quick breakfast ready in 10 minutes.",
    ingredients: [
      "Mixed seasonal fruit",
      "Lime",
      "Honey",
      "Fresh mint",
      "Natural yoghurt",
    ],
    method:
      "Chop the fruit into bite-sized pieces and toss gently with lime juice and honey. Scatter with mint and serve with a spoonful of yoghurt.",
  },
  {
    id: 16,
    title: "Spicy Arrabbiata Risotto Recipe | EatsByTeks",
    seoTitle: "Spicy Arrabbiata Risotto - EatsByTeks",
    seoDescription: "Learn how to make this creamy risotto with a fiery tomato sauce and fresh herbs.",
    category: "Dinner",
    time: "40 min",
    image: A("risotto.jpeg"),
    description:
      "Creamy risotto with passata, chilli flakes and parmesan, finished with lemon zest and parsley. A one-pot dinner recipe.",
    ingredients: [
      "Arborio rice",
      "Passata",
      "Onion",
      "Garlic",
      "Chilli flakes",
      "Vegetable stock",
      "Parmesan",
      "Lemon",
      "Fresh parsley",
    ],
    method:
      "Soften the onion and garlic with chilli flakes, then stir in the rice for a minute. Add the passata, then ladle in hot stock a little at a time, stirring until the rice is creamy and tender. Finish with parmesan, lemon zest and parsley.",
  },
  {
    id: 17,
    title: "Mango Swiss Roll Recipe | EatsByTeks",
    seoTitle: "Mango Swiss Roll - EatsByTeks",
    seoDescription: "Learn how to make this light and airy swiss roll filled with fresh mango and cream.",
    category: "Dessert",
    time: "50 min",
    image: A("mango-swiss-roll.jpeg"),
    description:
      "A light sponge rolled around whipped cream and fresh mango, then dusted with icing sugar. A step-by-step baking recipe.",
    ingredients: [
      "Eggs",
      "Caster sugar",
      "Plain flour",
      "Whipping cream",
      "Ripe mango",
      "Icing sugar",
    ],
    method:
      "Whisk the eggs and sugar until thick and pale, fold in the flour and bake in a lined tray at 190°C for about 10 minutes. Roll the warm sponge in baking paper and cool. Unroll, spread with whipped cream, lay mango along one edge, re-roll and dust with icing sugar.",
  },
  {
    id: 18,
    title: "Lamb Chops in Spicy Tomato Sauce with Naan | EatsByTeks",
    seoTitle: "Lamb Chops in Spicy Tomato Sauce with Naan - EatsByTeks",
    seoDescription: "Learn how to make this tender lamb chops in a rich, spicy tomato sauce, served with warm flatbread.",
    category: "Dinner",
    time: "50 min",
    image: A("lamb-chops.jpeg"),
    description:
      "Tender lamb chops simmered in a spiced tomato gravy with ginger and garam masala, served with warm naan. A hearty dinner recipe.",
    ingredients: [
      "Lamb chops",
      "Tomatoes",
      "Onion",
      "Garlic",
      "Ginger",
      "Garam masala",
      "Chilli powder",
      "Fresh coriander",
      "Naan",
    ],
    method:
      "Brown the lamb chops and set aside. Fry the onion, garlic and ginger, add the spices and chopped tomatoes and cook down into a sauce. Return the lamb and simmer gently until tender. Scatter with coriander and serve with warm naan.",
  },
  {
    id: 19,
    title: "Baked Chicken with Sweet Potato Mash and Green Beans Recipe | EatsByTeks",
    seoTitle: "Baked Chicken with Sweet Potato Mash and Green Beans - EatsByTeks",
    seoDescription: "Learn how to make this easy baked chicken with sweet potato mash and green beans.",
    category: "Dinner",
    time: "45 min",
    image: A("baked-chicken.jpeg"),
    description:
      "Oven-baked garlic chicken with sweet potato mash, sautéed green beans and carrots. A complete dinner recipe with clear steps.",
    ingredients: [
      "Chicken portions",
      "Sweet potatoes",
      "Green beans",
      "Carrots",
      "Butter",
      "Olive oil",
      "Garlic powder",
    ],
    method:
      "Rub the chicken with oil and garlic powder and bake at 200°C until golden and cooked through. Boil the sweet potatoes and mash with butter. Sauté the green beans and carrots until tender and serve alongside the chicken.",
  },
  {
    id: 20,
    title: "Chicken Burrito Bowl Recipe | EatsByTeks",
    seoTitle: "Chicken Burrito Bowl - EatsByTeks",
    seoDescription: "Learn how to make this delicious chicken burrito bowl with black beans, rice and avocado.",
    category: "Lunch",
    time: "35 min",
    image: A("chicken-burrito-bowl.jpeg"),
    description:
      "easoned chicken, rice, black beans, avocado and pico de gallo in a homemade burrito bowl with sour cream. An easy lunch recipe.",
    ingredients: [
      "Chicken breast",
      "White rice",
      "Black beans",
      "Avocado",
      "Tomatoes",
      "Red onion",
      "Lime",
      "Tortilla chips",
      "Sour cream",
    ],
    method:
      "Cook the rice and warm the black beans. Season the chicken with taco spices, sear until cooked and slice. Mix the tomatoes, red onion and lime into a quick pico de gallo. Build the bowls with rice, beans, chicken, avocado and chips, and finish with sour cream.",
  },
  {
    id: 21,
    title: "Pan-Seared Fish with Caramelised Onions Recipe | EatsByTeks",
    seoTitle: "Pan-Seared Fish with Caramelised Onions - EatsByTeks",
    seoDescription: "Learn how to make this delicious pan-seared fish with rich, sweet caramelized onions.",
    category: "Dinner",
    time: "30 min",
    image: A("caramelized-onion.jpeg"),
    description:
      "Crispy pan-seared white fish with sweet caramelised onions, garlic and thyme, served with green beans. An easy fish dinner.",
    ingredients: [
      "White fish fillets",
      "Yellow onions",
      "Garlic",
      "Green beans",
      "Butter",
      "Olive oil",
      "Fresh thyme",
      "Salt",
      "Black pepper",
    ],
    method:
      "Pat the fish dry, season and sear skin-side down until crisp, then flip briefly. Caramelize the onions in butter with garlic and thyme, add the cream and simmer. Steam the green beans and serve everything together.",
  },
  {
    id: 22,
    title: "Rainbow Crunch Salad Recipe | EatsByTeks",
    seoTitle: "Rainbow Crunch Salad - EatsByTeks",
    seoDescription: "Learn how to make this refreshing rainbow crunch salad with a creamy peanut dressing.",
    category: "Dinner",
    time: "20 min",
    image: A("rainbow-crunch.jpeg"),
    description:
      "Shredded cabbage, carrot and cucumber with cashews and a creamy peanut dressing.",
    ingredients: [
      "Red cabbage",
      "Carrots",
      "Cucumber",
      "Fresh coriander",
      "Cashews",
      "Sesame seeds",
      "Peanut butter",
      "Soy sauce",
      "Lime",
    ],
    method:
      "Shred the cabbage, carrots and cucumber and toss with coriander. Whisk the peanut butter, soy sauce and lime juice with a splash of warm water until pourable. Dress the salad and top with cashews and sesame seeds.",
  },
  {
    id: 23,
    title: "Burnt Basque Cheesecake Recipe | EatsByTeks",
    seoTitle: "Burnt Basque Cheesecake - EatsByTeks",
    seoDescription: "Learn how to make this decadent burnt basque cheesecake with a caramelised top and creamy centre.",
    category: "Dessert",
    time: "1 hr 10 min",
    image: A("burnt-basque-cheesecake.jpeg"),
    description:
      "How to make a burnt Basque cheesecake with a deeply caramelised top and a creamy centre. Crustless and simple, with step-by-step instructions.",
    ingredients: [
      "Cream cheese",
      "Caster sugar",
      "Eggs",
      "Double cream",
      "Plain flour",
      "Vanilla extract",
    ],
    method:
      "Beat the cream cheese and sugar until smooth, then mix in the eggs one at a time. Stir in the cream, flour and vanilla. Pour into a paper-lined tin and bake at 220°C until deeply browned on top but still wobbly in the middle. Cool before slicing.",
  },
  {
    id: 24,
    title: "Classic Tiramisu Recipe with Coffee and Mascarpone | EatsByTeks",
    seoTitle: "Classic Tiramisu - EatsByTeks",
    seoDescription: "Learn how to make this iconic Italian dessert with coffee and mascarpone.",
    category: "Dessert",
    time: "40 min",
    image: A("tiramisu.jpeg"),
    description:
      "Coffee-soaked ladyfingers layered with whipped mascarpone and dusted with cocoa. A classic tiramisu with step-by-step instructions.",
    ingredients: [
      "Ladyfingers",
      "Mascarpone",
      "Eggs",
      "Caster sugar",
      "Strong coffee",
      "Cocoa powder",
    ],
    method:
      "Whisk the egg yolks with sugar, fold in the mascarpone, then fold in the whisked whites. Dip the ladyfingers briefly in coffee and layer with the cream in a dish. Chill for at least four hours and dust with cocoa before serving.",
  },
  {
    id: 25,
    title: "Teriyaki Salmon Rice Bowl Recipe | EatsByTeks",
    seoTitle: "Teriyaki Salmon Rice Bowl - EatsByTeks",
    seoDescription: "Learn how to make this delicious teriyaki salmon rice bowl with steamed rice and broccoli.",
    category: "Dinner",
    time: "30 min",
    image: A("teriyaki-salmon.jpeg"),
    description:
      "Salmon glazed in homemade teriyaki sauce, served over sushi rice with broccoli and sesame seeds. A 30-minute dinner recipe.",
    ingredients: [
      "Salmon fillets",
      "Sushi rice",
      "Broccoli",
      "Soy sauce",
      "Honey",
      "Rice vinegar",
      "Ginger",
      "Sesame seeds",
    ],
    method:
      "Cook the rice and steam the broccoli. Mix the soy sauce, honey, vinegar and ginger for the teriyaki glaze. Sear the salmon, pour in the glaze and let it bubble until sticky. Serve over rice with broccoli and sesame seeds.",
  },
  {
    id: 26,
    title: "Passionfruit Loaf Cake Recipe | EatsByTeks",
    seoTitle: "Passionfruit Loaf Cake - EatsByTeks",
    seoDescription: "Learn how to make this moist and tangy loaf cake with a passionfruit glaze and fresh seeds.",
    category: "Dessert",
    time: "1 hr",
    image: A("passionfruit-loaf-cake.jpeg"),
    description:
      "A moist passionfruit loaf cake made with yoghurt and finished with a tangy passionfruit glaze. An easy baking recipe.",
    ingredients: [
      "Plain flour",
      "Caster sugar",
      "Butter",
      "Eggs",
      "Passion fruit",
      "Natural yoghurt",
      "Baking powder",
      "Icing sugar",
    ],
    method:
      "Cream the butter and sugar, beat in the eggs, then fold in flour, baking powder, yoghurt and most of the passion fruit pulp. Bake in a lined loaf tin at 170°C until a skewer comes out clean. Mix the icing sugar with a little pulp and drizzle over the cooled cake.",
  },
  {
    id: 27,
    title: "Kenyan Beef Pilau Recipe with Kachumbari | EatsByTeks",
    seoTitle: "Kenyan Beef Pilau with Kachumbari - EatsByTeks",
    seoDescription: "Learn how to make this aromatic Kenyan beef pilau with tender meat and potatoes, served with fresh kachumbari.",
    category: "Dinner",
    time: "1 hr 15 min",
    image: A("kenyan-beef-pilau.jpeg"),
    description:
      "Fragrant pilau with spiced rice, tender beef and potatoes, served with fresh kachumbari. A one-pot Kenyan dinner recipe.",
    ingredients: [
      "Basmati rice",
      "Beef",
      "Potatoes",
      "Onions",
      "Garlic",
      "Pilau masala",
      "Tomatoes",
      "Kachumbari",
    ],
    method:
      "Brown the onions deeply, add garlic, pilau masala and the beef and simmer until tender. Add the potatoes and rinsed rice with enough water to cover, then cook covered on low heat until the rice is fluffy. Serve with kachumbari on the side.",
  },
  {
    id: 28,
    title: "Githeri Salad with Avocado and Feta Recipe | EatsByTeks",
    seoTitle: "Githeri with Avocado and Feta - EatsByTeks",
    seoDescription: "Learn how to make this hearty Kenyan githeri salad with creamy avocado, crumbled feta, fresh tomatoes and red onion.",
    category: "Lunch",
    time: "25 min",
    image: A("githeri.jpeg"),
    description:
      "A Kenyan githeri salad with avocado, feta, cherry tomatoes and red onion in a lemon olive oil dressing. A filling, quick lunch.",
    ingredients: [
      "Githeri (maize and beans)",
      "Avocado",
      "Cherry tomatoes",
      "Red onion",
      "Feta",
      "Mixed greens",
      "Olive oil",
      "Lemon",
    ],
    method:
      "Combine the cooked githeri with chopped tomatoes and thinly sliced red onion. Drizzle with olive oil and fresh lemon juice, then toss gently. Add sliced avocado, crumbled feta and mixed greens before serving.",
  },
  {
    id: 29,
    title: "Creamy Mushroom Soup with Ciabatta | EatsByTeks",
    seoTitle: "Creamy Mushroom Soup with Ciabatta - EatsByTeks",
    seoDescription: "Learn how to make this velvety blended mushroom soup with a slice of toasted ciabatta.",
    category: "Lunch",
    time: "35 min",
    image: A("creamy-mushroom-soup.jpeg"),
    description:
      "A velvety blended mushroom soup with thyme, garlic and cream, served with toasted ciabatta. An easy lunch recipe.",
    ingredients: [
      "Mushrooms",
      "Onion",
      "Garlic",
      "Vegetable stock",
      "Cream",
      "Fresh thyme",
      "Ciabatta",
      "Butter",
    ],
    method:
      "Soften the onion in butter, add the mushrooms, garlic and thyme and cook until golden. Pour in the stock, simmer, then blend until smooth and stir in the cream. Serve with toasted ciabatta.",
  },
  {
    id: 30,
    title: "Thai Mango Sticky Rice Recipe with Coconut Milk | EatsByTeks",
    seoTitle: "Mango Sticky Rice - EatsByTeks",
    seoDescription: "Learn how to make this sweet and creamy mango sticky rice with fresh mango and toasted sesame seeds.",
    category: "Dessert",
    time: "45 min",
    image: A("mango-sticky-rice.jpeg"),
    description:
      "Sweet coconut sticky rice with ripe mango and toasted sesame seeds. A simple Thai-style dessert with step-by-step instructions.",
    ingredients: [
      "Glutinous rice",
      "Coconut milk",
      "Sugar",
      "Salt",
      "Ripe mangoes",
      "Toasted sesame seeds",
    ],
    method:
      "Soak and steam the rice until tender. Warm the coconut milk with sugar and salt, then stir most of it into the hot rice and let it absorb. Serve with sliced mango, a drizzle of the remaining coconut milk and sesame seeds.",
  },
  {
    id: 31,
    title: "Ugali with Goat Fry and Creamed Greens | EatsByTeks",
    seoTitle: "Ugali with Goat Fry and Creamed Greens - EatsByTeks",
    seoDescription: "Learn how to make this traditional Kenyan dish with soft ugali, crispy goat fry and creamy sautéed greens.",
    category: "Dinner",
    time: "1 hr 15 min",
    image: A("dry-goat-fry.jpeg"),
    description:
      "Soft Kenyan ugali served with fried goat meat, onions, tomatoes and creamy sautéed greens. A hearty dinner recipe.",
    ingredients: [
      "Maize flour",
      "Goat meat",
      "Onions",
      "Tomatoes",
      "Spinach or kale",
      "Cream",
      "Garlic",
      "Cooking oil",
    ],
    method:
      "Simmer the goat until tender, then fry with onions and tomatoes until browned. Sauté the greens with garlic and stir in the cream. Boil water, beat in the maize flour until stiff and smooth, and serve the ugali with the goat and greens.",
  },
  {
    id: 32,
    title: "Kenyan Kaimati | EatsByTeks",
    seoTitle: "Kenyan Kaimati - EatsByTeks",
    seoDescription: "Learn how to make this golden, crispy Swahili kaimati with soft, fluffy centres, coated in a sweet, sticky sugar syrup for a delicious coastal treat.",
    category: "Breakfast",
    time: "45 min",
    image: A("kaimati.jpeg"),
    description:
      "Golden, crispy kaimati made with yoghurt and cardamom, then tossed in sweet syrup. Step-by-step instructions for this Swahili coastal treat.",
    ingredients: [
      "All-purpose flour",
      "Plain yoghurt",
      "Instant yeast",
      "Sugar",
      "Warm water",
      "Cooking oil",
      "Cardamom",
      "Water for syrup",
    ],
    method:
      "Mix the flour, yeast, sugar and cardamom in a bowl. Add yoghurt and enough warm water to make a thick, smooth batter. Cover and leave to rise for 30–45 minutes. Heat oil in a deep pan, then carefully drop small portions of batter into the hot oil. Fry until puffed up and golden brown, turning occasionally for even cooking. In a separate saucepan, simmer sugar and a little water until syrupy. Toss the fried kaimati in the warm syrup until coated, then serve.",
  },
  {
    id: 33,
    title: "Flan (Crème Caramel) Recipe with Condensed Milk | EatsByTeks",
    seoTitle: "Flan (Crème Caramel) - EatsByTeks",
    seoDescription: "Learn how to make this silky custard crowned with a layer of soft caramel.",
    category: "Dessert",
    time: "1 hr 10 min",
    image: A("flan.jpeg"),
    description:
      "A silky flan with a golden caramel layer, made with condensed and evaporated milk and vanilla. Chilled and turned out to serve.",
    ingredients: [
      "Caster sugar",
      "Eggs",
      "Condensed milk",
      "Evaporated milk",
      "Whole milk",
      "Vanilla extract",
    ],
    method:
      "Melt the sugar into a golden caramel and pour into the base of a mould. Blend the eggs, milks and vanilla, strain over the caramel and bake in a water bath at 160°C until just set. Chill well, then turn out to serve.",
  },
  {
    id: 34,
    title: "Coconut Fish Curry | EatsByTeks",
    seoTitle: "Coconut Fish Curry - EatsByTeks",
    seoDescription: "Learn how to make this creamy, gently spiced coconut and tomato fish curry with a hint of lime and fresh coriander.",
    category: "Dinner",
    time: "40 min",
    image: A("coconut-fish-curry.jpeg"),
    description:
      "Tender white fish simmered in a creamy coconut and tomato curry with ginger, garlic and lime. An easy fish curry with clear steps.",
    ingredients: [
      "White fish fillets",
      "Coconut milk",
      "Onion",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Curry powder",
      "Turmeric",
      "Lime",
      "Fresh coriander",
      "Cooking oil",
    ],
    method:
      "Fry the sliced onion in oil until soft and golden, then add the garlic, ginger, curry powder and turmeric. Stir in the chopped tomatoes and cook down into a thick sauce. Pour in the coconut milk and simmer for 10 minutes. Slide in the fish and cook gently for 8 to 10 minutes until just cooked through. Finish with lime juice and fresh coriander.",
  },
  {
    id: 36,
    title: "Carrot and Apple Cake Recipe with Cream Cheese Icing | EatsByTeks",
    seoTitle: "Carrot and Apple Cake with Cream Cheese Icing - EatsByTeks",
    seoDescription: "Learn how to make this moist, spiced cake with grated carrot and apple, topped with a thick cream cheese frosting.",
    category: "Dessert",
    time: "1 hr 10 min",
    image: A("carrot-and-apple-spice.jpeg"),
    description:
      "A moist carrot and apple spice cake with mixed spice, topped with thick cream cheese frosting. An easy baking recipe.",
    ingredients: [
      "Carrots",
      "Apples",
      "Plain flour",
      "Brown sugar",
      "Eggs",
      "Vegetable oil",
      "Mixed spice",
      "Cream cheese",
      "Icing sugar",
    ],
    method:
      "Whisk the sugar, eggs and oil, then fold in the flour, spice, grated carrots and apples. Bake in a lined loaf tin at 175°C until a skewer comes out clean. Cool, then beat the cream cheese with icing sugar and spread over the top.",
  },
  {
    id: 37,
    title: "Pumpkin Bread with Cinnamon Streusel Recipe | EatsByTeks",
    seoTitle: "Pumpkin Bread with Cinnamon Streusel - EatsByTeks",
    seoDescription: "Learn how to make this moist pumpkin bread with a buttery cinnamon streusel and a sweet vanilla glaze.",
    category: "Dessert",
    time: "1 hr 15 min",
    image: A("pumpkin-bread.jpeg"),
    description:
      "Moist pumpkin bread with a buttery cinnamon streusel topping and a sweet vanilla glaze. An easy loaf recipe.",
    ingredients: [
      "Pumpkin purée",
      "Plain flour",
      "Brown sugar",
      "Eggs",
      "Vegetable oil",
      "Cinnamon",
      "Butter",
      "Icing sugar",
    ],
    method:
      "Mix the pumpkin, sugar, eggs and oil, then fold in the flour and half the cinnamon. Rub the butter with a little flour, sugar and the remaining cinnamon for the streusel. Pour the batter into a loaf tin, top with streusel and bake at 175°C until set. Drizzle with icing sugar glaze.",
  },
  {
    id: 38,
    title: "Chilli Con Carne Recipe with Rice and Tortilla Chips | EatsByTeks",
    seoTitle: "Chili con carne with rice and tortilla chips - EatsByTeks",
    seoDescription: "Learn how to make this hearty spiced beef and bean stew with rice, chips and sour cream.",
    category: "Dinner",
    time: "1 hr",
    image: A("chili-con-carne.jpeg"),
    description:
      "A hearty beef and kidney bean chilli with tomatoes and garlic, served with rice, tortilla chips and sour cream. An easy dinner.",
    ingredients: [
      "Ground beef",
      "Kidney beans",
      "Onions",
      "Garlic",
      "Chopped tomatoes",
      "Chilli powder",
      "Rice",
      "Tortilla chips",
      "Sour cream",
    ],
    method:
      "Brown the beef with the onions and garlic, stir in the chilli powder, tomatoes and beans and simmer until thick and rich. Cook the rice and serve the chili alongside with tortilla chips and sour cream.",
  },
  {
    id: 39,
    title: "Red velvet cake with cream cheese frosting",
    category: "Dessert",
    time: "1 hr 30 min",
    image: A("red-velvet-cake.jpeg"),
    description:
      "A deep red layered cake with a gentle cocoa flavour and tangy frosting.",
    ingredients: [
      "Plain flour",
      "Caster sugar",
      "Butter",
      "Eggs",
      "Buttermilk",
      "Cocoa powder",
      "Red food colouring",
      "Cream cheese",
      "Icing sugar",
    ],
    method:
      "Cream the butter and sugar, beat in the eggs, then alternate the flour and cocoa with buttermilk and colouring. Bake in two tins at 175°C and cool completely. Beat the cream cheese with icing sugar, sandwich and cover the cake.",
  },
  {
    id: 40,
    title: "Lemon posset in lemon shells",
    category: "Dessert",
    time: "20 min",
    image: A("lemon-posset.jpeg"),
    description:
      "A three-ingredient creamy lemon dessert served in hollowed-out lemon halves.",
    ingredients: ["Double cream", "Caster sugar", "Lemons"],
    method:
      "Heat the cream and sugar, boil for three minutes, then stir in the lemon juice. Pour into hollowed lemon halves and chill until set, at least three hours.",
  },
 
  {
    id: 42,
    title: "Salmon alla vodka| EatsByTeks",
    seoTitle: "Salmon alla vodka - EatsByTeks",
    seoDescription: "Learn how to make this delicious seared salmon with a creamy tomato vodka sauce, served with mash and broccoli.",
    category: "Dinner",
    time: "35 min",
    image: A("salmon-alla-vodka.jpeg"),
    description:
      "Seared salmon over a creamy tomato vodka sauce with mash and broccoli.",
    ingredients: [
      "Salmon fillets",
      "Passata",
      "Vodka",
      "Cream",
      "Garlic",
      "Broccoli",
      "Potatoes",
      "Butter",
    ],
    method:
      "Boil the potatoes and mash with butter, and steam the broccoli. Soften the garlic, add the vodka and let it reduce, then stir in the passata and cream. Sear the salmon and serve over the sauce with mash and broccoli.",
  },
  {
    id: 43,
    title: "Blueberry Muffins Recipe | EatsByTeks",
    seoTitle: "Blueberry Muffins - EatsByTeks",
    seoDescription: "Learn how to make these soft and tender muffins studded with blueberries and topped with a crunchy sugar crust.",
    category: "Breakfast",
    time: "35 min",
    image: A("blueberry-muffins.jpeg"),
    description:
      "Soft, tender muffins studded with blueberries and a crunchy sugar top.",
    ingredients: [
      "Plain flour",
      "Blueberries",
      "Caster sugar",
      "Butter",
      "Eggs",
      "Milk",
      "Baking powder",
      "Coarse sugar",
    ],
    method:
      "Mix the dry ingredients. Whisk the melted butter, eggs and milk, then fold into the flour with the blueberries until just combined. Spoon into a muffin tin, sprinkle with coarse sugar and bake at 190°C until golden.",
  },
  {
    id: 44,
    title: "Tom Yum Gai Recipe | EatsByTeks",
    seoTitle: "Tom Yum Gai - EatsByTeks",
    seoDescription: "Learn how to make this hot and sour Thai chicken soup with lemongrass, galangal and lime.",
    category: "Lunch",
    time: "35 min",
    image: A("tom-yum-gai.jpeg"),
    description:
      "A hot and sour Thai chicken soup with lemongrass, galangal and lime.",
    ingredients: [
      "Chicken breast",
      "Lemongrass",
      "Galangal",
      "Kaffir lime leaves",
      "Mushrooms",
      "Fish sauce",
      "Limes",
      "Chillies",
      "Chicken stock",
      "Fresh coriander",
    ],
    method:
      "Simmer the stock with the lemongrass, galangal, lime leaves and chillies for 10 minutes. Add the sliced chicken and mushrooms and cook until tender. Season with fish sauce and lime juice and finish with coriander.",
  },
  {
    id: 45,
    title: "Beet-pickled deviled eggs",
    seoTitle: "Beet-pickled deviled eggs - EatsByTeks",
    seoDescription: "Learn how to make these vibrant pink pickled eggs with a creamy, seasoned yolk filling.",
    category: "Lunch",
    time: "40 min",
    image: A("beet-pickled-deviled-eggs.jpeg"),
    description:
      "Vibrant pink pickled eggs with a creamy, seasoned yolk filling.",
    ingredients: [
      "Eggs",
      "Beetroot juice",
      "White vinegar",
      "Mayonnaise",
      "Dijon mustard",
      "Crispy fried onions",
      "Paprika",
    ],
    method:
      "Hard-boil and peel the eggs, then steep in warm beetroot juice and vinegar for a few hours until pink. Halve them and mash the yolks with mayonnaise and mustard. Pipe the filling back in and top with crispy onions and paprika.",
  },
  {
    id: 46,
    title: "Mango Cream Swiss Roll | EatsByTeks",
    seoTitle: "Mango Cream Swiss Roll - EatsByTeks",
    seoDescription: "Learn how to make this light and fluffy swiss roll filled with creamy mango custard and topped with fresh mango slices.",
    category: "Dessert",
    time: "50 min",
    image: A("mango-swiss.jpeg"),
    description:
      "A light rolled sponge filled with soft cream and a piece of fresh mango at the centre.",
    ingredients: [
      "Eggs",
      "Caster sugar",
      "Plain flour",
      "Whipping cream",
      "Ripe mango",
      "Icing sugar",
    ],
    method:
      "Whisk the eggs and sugar until thick and pale, fold in the flour and bake in a lined tray at 190°C for about 10 minutes. Roll the warm sponge in baking paper and cool. Unroll, spread with whipped cream, lay a strip of mango along one edge, re-roll and chill before slicing.",
  },
  {
    id: 49,
    title: "Kenyan chapati",
    category: "Dinner",
    time: "1 hr",
    image: A("kenyan-chapati.jpeg"),
    description:
      "Soft, flaky, layered flatbread cooked on a hot pan, perfect for scooping up stews.",
    ingredients: [
      "Plain flour",
      "Warm water",
      "Vegetable oil",
      "Salt",
      "Sugar",
    ],
    method:
      "Mix the flour, salt and sugar, then knead with the warm water and 2 tablespoons of oil into a soft, smooth dough. Cover and rest for 30 minutes. Divide into balls, roll each out thin, brush with oil, roll into a rope and coil it up like a snail. Rest for 10 minutes, then roll flat again. Cook on a hot dry pan, brushing with oil and flipping until golden with brown spots.",
  },
  {
    id: 50,
    title: "Cardamom-Coconut Mahamri | EatsByTeks",
    seoTitle: "Cardamom-Coconut Mahamri - EatsByTeks",
    seoDescription: "Learn how to make these fluffy, golden Swahili doughnut triangles scented with cardamom and coconut.",
    category: "Breakfast",
    time: "1 hr 30 min",
    image: A("cardamom-coconut-mahamri.jpeg"),
    description:
      "Fluffy, golden Swahili doughnut triangles scented with cardamom and coconut.",
    ingredients: [
      "Plain flour",
      "Coconut milk",
      "Sugar",
      "Instant yeast",
      "Ground cardamom",
      "Desiccated coconut",
      "Vegetable oil",
    ],
    method:
      "Mix the flour, sugar, yeast, cardamom and desiccated coconut, then knead with warm coconut milk into a soft dough. Cover and let it rise for about an hour until doubled. Roll out, cut into triangles and rest for 10 minutes. Fry in hot oil until puffed and golden brown, turning once, then drain on paper towels.",
  },
  {
    id: 51,
    title: "Coconut beans | EatsByTeks",
    seoTitle: "Coconut beans - EatsByTeks",
    seoDescription: "Learn how to make these tender kidney beans simmered in a creamy, lightly spiced coconut and tomato sauce.",
    category: "Lunch",
    time: "45 min",
    image: A("coconut-beans.jpeg"),
    description:
      "Tender kidney beans simmered in a creamy, lightly spiced coconut and tomato sauce.",
    ingredients: [
      "Cooked kidney beans",
      "Coconut milk",
      "Onion",
      "Tomatoes",
      "Garlic",
      "Curry powder",
      "Fresh coriander",
      "Cooking oil",
    ],
    method:
      "Fry the chopped onion in oil until soft and golden, then add the garlic and curry powder. Stir in the chopped tomatoes and cook down into a thick sauce. Add the beans and coconut milk and simmer gently for 20 minutes until creamy. Season and finish with fresh coriander.",
  },
  {
    id: 52,
    title: "Goat biryani | EatsByTeks",
    seoTitle: "Goat biryani - EatsByTeks",
    seoDescription: "Learn how to make this aromatic biryani with tender goat meat and fragrant basmati rice.",
    category: "Dinner",
    time: "2 hr",
    image: A("goat-biryani.jpeg"),
    description:
      "Fragrant layers of spiced goat and basmati rice, steamed low and slow.",
    ingredients: [
      "Goat meat",
      "Basmati rice",
      "Onions",
      "Tomatoes",
      "Plain yoghurt",
      "Garlic",
      "Ginger",
      "Biryani masala",
      "Fresh coriander",
      "Cooking oil",
    ],
    method:
      "Marinate the goat in yoghurt, garlic, ginger and half the masala for at least an hour. Brown the sliced onions in oil, add the goat and tomatoes and simmer until the meat is tender. Parboil the rice until three-quarters cooked. Layer the rice over the goat, scatter with coriander, cover tightly and steam on very low heat for 25 minutes before gently mixing.",
  },
] 
export const categories = [
  "All recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Dessert",
  "Baked Goods",
];

export const categoryTiles = [
  {
    label: "Breakfast",
    sub: "Start the day well",
    image: A("fuit-salad.jpeg"),
    category: "Breakfast",
  },
  {
    label: "Lunch",
    sub: "Quick and satisfying",
    image: A("pesto-fusilli.jpeg"),
    category: "Lunch",
  },
  {
    label: "Everyday dinners",
    sub: "The end-of-day favorites",
    image: A("recipe-pasta.jpg"),
    category: "Dinner",
  },
  {
    label: "Dessert",
    sub: "A little something lovely",
    image: A("recipe-cake.jpg"),
    category: "Dessert",
  },
  {
    label: "Baked goods",
    sub: "Brighten your plate",
    image: A("recipe-bowl.jpg"),
    category: "Baked Goods",
  },
];

export const recipeSlug = (recipe: Recipe) =>
  recipe.title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const findRecipe = (slug: string) =>
  recipes.find((recipe) => recipeSlug(recipe) === slug);

export const popularIngredients = [
  "Garlic",
  "Tomatoes",
  "Basil",
  "Parmesan",
  "Chicken",
  "Avocado",
  "Strawberries",
  "Cheddar",
  "Brioche",
];

export const baseServings = 4;

/** Quantities for baseServings, aligned with each recipe's ingredients. */
const amounts: Record<number, [number, string][]> = {
  7: [
    [400, "g"],
    [250, "g"],
    [120, "g"],
    [1, "handful"],
    [60, "g"],
    [3, "tbsp"],
    [2, "cloves"],
  ],
  8: [
    [4, "steaks"],
    [800, "g"],
    [60, "g"],
    [1, "bunch"],
    [2, "cloves"],
    [2, "tbsp"],
    [4, "tbsp"],
  ],
  9: [
    [4, ""],
    [800, "g"],
    [4, ""],
    [300, "g"],
    [2, "tbsp"],
    [40, "g"],
    [2, "tsp"],
  ],
  10: [
    [800, "g"],
    [1, "bunch"],
    [2, "cloves"],
    [4, "tbsp"],
    [1, ""],
    [1, "tsp"],
  ],
  11: [
    [500, "g"],
    [300, "g"],
    [2, ""],
    [200, "g"],
    [4, "tbsp"],
    [2, "tbsp"],
    [2, "tbsp"],
  ],
  12: [
    [200, "g"],
    [180, "g"],
    [120, "g"],
    [100, "g"],
    [2, ""],
    [1, "tsp"],
    [4, "scoops"],
  ],
  13: [
    [4, "fillets"],
    [300, "g"],
    [800, "g"],
    [200, "ml"],
    [1, ""],
    [1, ""],
    [40, "g"],
  ],
  14: [
    [400, "g"],
    [400, "g"],
    [2, "cloves"],
    [200, "ml"],
    [60, "g"],
    [4, "sprigs"],
  ],
  1: [
    [4, ""],
    [600, "g"],
    [4, "slices"],
    [1, "head / 2"],
    [1, ""],
    [120, "ml"],
  ],
  2: [
    [400, "g"],
    [300, "g"],
    [200, "ml"],
    [3, "cloves"],
    [1, "handful"],
    [60, "g"],
  ],
  3: [
    [2, "layers"],
    [400, "g"],
    [400, "ml"],
    [80, "g"],
    [2, "tsp"],
  ],
  4: [
    [4, ""],
    [250, "g"],
    [2, ""],
    [500, "g"],
    [120, "g"],
    [150, "ml"],
  ],
  5: [
    [4, ""],
    [4, ""],
    [4, "slices"],
    [2, ""],
    [1, "head"],
  ],
  6: [
    [400, "g"],
    [500, "g"],
    [3, "cloves"],
    [1, "handful"],
    [60, "g"],
  ],
  15: [
    [600, "g"],
    [1, ""],
    [2, "tbsp"],
    [1, "handful"],
    [200, "g"],
  ],
  16: [[320, "g"], [400, "ml"], [1, ""], [3, "cloves"], [1, "tsp"], [1, "l"], [60, "g"], [1, ""], [1, "handful"]],
  17: [[4, ""], [100, "g"], [100, "g"], [300, "ml"], [2, ""], [2, "tbsp"]],
  18: [[8, ""], [400, "g"], [2, ""], [4, "cloves"], [1, "tbsp"], [2, "tsp"], [1, "tsp"], [1, "handful"], [4, ""]],
  19: [[4, ""], [800, "g"], [250, "g"], [2, ""], [40, "g"], [2, "tbsp"], [1, "tsp"]],
  20: [[500, "g"], [250, "g"], [400, "g"], [2, ""], [3, ""], [1, ""], [1, ""], [1, "handful"], [4, "tbsp"]],
  21: [[4, "fillets"], [250, "g"], [2, "cloves"], [250, "g"], [30, "g"], [2, "tbsp"], [4, "sprigs"], [1, "pinch"], [1, "pinch"]],
  22: [[0.5, "head"], [3, ""], [1, ""], [1, "handful"], [60, "g"], [2, "tbsp"], [3, "tbsp"], [2, "tbsp"], [1, ""]],
  23: [[800, "g"], [200, "g"], [5, ""], [400, "ml"], [2, "tbsp"], [2, "tsp"]],
  24: [[24, ""], [500, "g"], [4, ""], [100, "g"], [300, "ml"], [2, "tbsp"]],
  25: [[4, "fillets"], [300, "g"], [300, "g"], [4, "tbsp"], [2, "tbsp"], [1, "tbsp"], [1, "tsp"], [1, "tbsp"]],
  26: [[250, "g"], [200, "g"], [150, "g"], [3, ""], [6, ""], [100, "g"], [2, "tsp"], [100, "g"]],
  27: [[400, "g"], [500, "g"], [400, "g"], [2, ""], [4, "cloves"], [2, "tbsp"], [2, ""], [1, "bowl"]],
  28: [[500, "g"], [2, ""], [200, "g"], [1, ""], [100, "g"], [150, "g"], [2, "tbsp"], [1, ""]],
  29: [[500, "g"], [1, ""], [2, "cloves"], [750, "ml"], [150, "ml"], [4, "sprigs"], [1, "loaf"], [30, "g"]],
  30: [[300, "g"], [400, "ml"], [80, "g"], [0.5, "tsp"], [2, ""], [1, "tbsp"]],
  31: [[500, "g"], [800, "g"], [2, ""], [3, ""], [500, "g"], [100, "ml"], [3, "cloves"], [3, "tbsp"]],
  32: [[300, "g"], [200, "g"], [2, "tsp"], [3, "tbsp"], [150, "ml"], [500, "ml"], [1, "tsp"], [100, "ml"]],
  33: [[150, "g"], [4, ""], [400, "g"], [350, "ml"], [250, "ml"], [2, "tsp"]],
  34: [[600, "g"], [400, "ml"], [1, ""], [2, ""], [3, "cloves"], [1, "tbsp"], [2, "tsp"], [1, "tsp"], [1, ""], [1, "handful"], [2, "tbsp"]],
  36: [[250, "g"], [2, ""], [250, "g"], [200, "g"], [3, ""], [150, "ml"], [2, "tsp"], [200, "g"], [100, "g"]],
  37: [[400, "g"], [300, "g"], [200, "g"], [2, ""], [100, "ml"], [2, "tsp"], [50, "g"], [100, "g"]],
  38: [[600, "g"], [400, "g"], [2, ""], [3, "cloves"], [400, "g"], [2, "tsp"], [300, "g"], [1, "handful"], [4, "tbsp"]],
  39: [[300, "g"], [300, "g"], [150, "g"], [3, ""], [250, "ml"], [2, "tbsp"], [2, "tbsp"], [400, "g"], [250, "g"]],
  40: [[600, "ml"], [150, "g"], [4, ""]],
  41: [[500, "g"], [80, "g"], [250, "ml"], [2, "tsp"], [2, "tsp"], [1, ""], [500, "ml"]],
  42: [[4, "fillets"], [400, "ml"], [60, "ml"], [150, "ml"], [3, "cloves"], [300, "g"], [800, "g"], [40, "g"]],
  43: [[300, "g"], [200, "g"], [150, "g"], [100, "g"], [2, ""], [200, "ml"], [2, "tsp"], [2, "tbsp"]],
  44: [[400, "g"], [2, "stalks"], [2, "slices"], [6, ""], [200, "g"], [2, "tbsp"], [2, ""], [2, ""], [1, "l"], [1, "handful"]],
  45: [[8, ""], [250, "ml"], [150, "ml"], [4, "tbsp"], [1, "tsp"], [2, "tbsp"], [1, "tsp"]],
  46: [[4, ""], [100, "g"], [100, "g"], [300, "ml"], [2, ""], [2, "tbsp"]],
  49: [[500, "g"], [300, "ml"], [6, "tbsp"], [1, "tsp"], [1, "tbsp"]],
  50: [[500, "g"], [250, "ml"], [80, "g"], [2, "tsp"], [2, "tsp"], [30, "g"], [500, "ml"]],
  51: [[500, "g"], [400, "ml"], [1, ""], [2, ""], [3, "cloves"], [1, "tsp"], [1, "handful"], [2, "tbsp"]],
  52: [[800, "g"], [400, "g"], [3, ""], [3, ""], [200, "g"], [4, "cloves"], [1, "tbsp"], [2, "tbsp"], [1, "handful"], [4, "tbsp"]],
};

const fmt = (n: number) =>
  (n >= 10 ? Math.round(n) : Math.round(n * 4) / 4)
    .toString()
    .replace(/\.25$/, "¼")
    .replace(/\.5$/, "½")
    .replace(/\.75$/, "¾")
    .replace(/^0(?=[¼½¾])/, "");

export function scaledIngredients(recipe: Recipe, servings: number) {
  const list = amounts[recipe.id] ?? [];
  return recipe.ingredients.map((name, i) => {
    const a = list[i];
    return {
      name,
      amount: a
        ? `${fmt((a[0] * servings) / baseServings)}${
            a[1] ? " " + a[1] : ""
          }`
        : "",
    };
  });
}

/** Flexible swaps: keyword -> alternatives. */
const swapTable: [string, string][] = [
  ["beef", "turkey mince, lentil patties or mushrooms"],
  ["chicken", "tofu, chickpeas or salmon"],
  ["cream", "Greek yogurt, coconut milk or cashew cream"],
  ["parmesan", "pecorino or nutritional yeast"],
  ["cheddar", "gouda, vegan cheese or halloumi"],
  ["pasta", "wholewheat, gluten-free pasta or courgette ribbons"],
  ["penne", "any short pasta or gluten-free penne"],
  ["brioche", "sourdough rolls, lettuce wraps or gluten-free buns"],
  ["grains", "quinoa, brown rice or couscous"],
  ["sugar", "honey, maple syrup or less sugar"],
  ["strawberries", "raspberries, mango or peaches"],
  ["basil", "spinach, rocket or parsley"],
  ["avocado", "hummus or edamame"],
  ["mushrooms", "courgette or aubergine"],
  ["potatoes", "sweet potatoes or cauliflower"],
  ["rice", "quinoa or cauliflower rice"],
  ["dates", "dried figs or prunes"],
  ["lamb", "goat, beef or jackfruit"],
  ["goat", "lamb, beef or jackfruit"],
  ["salmon", "trout, tofu or chickpeas"],
  ["fish", "tofu, prawns or cauliflower steaks"],
  ["feta", "halloumi or goat's cheese"],
  ["mascarpone", "cream cheese or whipped ricotta"],
  ["peanut", "almond butter or tahini"],
  ["mango", "peaches, pineapple or papaya"],
  ["milk", "oat, almond or soy milk"],
  ["mayonnaise", "Greek yogurt or hummus"],
];

export function recipeSwaps(recipe: Recipe) {
  return recipe.ingredients.flatMap((ing) => {
    const hit = swapTable.find(([k]) => ing.toLowerCase().includes(k));
    return hit ? [{ ingredient: ing, swap: hit[1] }] : [];
  });
}