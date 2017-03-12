export function setRecipes(recipes) {
  if(Array.isArray(recipes)) {
    localStorage.setItem('recipes', JSON.stringify(recipes)); // localStorage needs a string
    return recipes;
  }
}

export function getRecipes() {
  var stringRecipes = localStorage.getItem('recipes');
  var recipes = [];
  try {
    recipes = JSON.parse(stringRecipes); // transform the string back to array
  } catch(e) {

  }
  return Array.isArray(recipes) ? recipes : [];

}
