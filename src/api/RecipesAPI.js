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

export function filterRecipes(recipes, searchText) {
  var filteredRecipes = recipes;
  // for (var i in filteredRecipes) {
  //   filteredRecipes[i].title = filteredRecipes[i].title.toLowerCase();
  //   for(var x in filteredRecipes) {
  //     filteredRecipes[i].ingredients[x] = filteredRecipes[i].ingredients[x].toLowerCase();
  //   }
  // }
  filteredRecipes = filteredRecipes.filter((recipe) => {
    let text = recipe.title.toLowerCase();
    return searchText.length === 0 || text.indexOf(searchText) > -1;
  });
  return filteredRecipes;
}
