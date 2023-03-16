/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/

let recipe = {
  recipeOne: {
  title: "mole",
  servings: 2,
  Ingredients: ["cinnamon", "cumin", "cocoa"]
  },
  recipeTwo:{
    title: "pancakes",
    servings: 6,
    Ingredients: ["cinnamon", "flour", "cocoa", "butter", "eggs"]
  },
  recipeThree: {
    title: "rice",
    servings: 4,
    Ingredients: ["rice", "water", "salt"]
  },
  recipeFour: {
    title: "cake",
    servings: 8,
    Ingredients: ["flour", "eggs", "sugar", "cocoa"]
  },
  recipeFive: {
    title: "bread",
    servings: 1,
    Ingredients: ["flour", "yeast", "salt"]
  }
}

console.log(recipe.recipeOne)
console.log(recipe.recipeTwo)
console.log(recipe.recipeThree)
console.log(recipe.recipeFour)
console.log(recipe.recipeFive)