import React from 'react';
import RecipesListItem from './recipes-list-item';

const RecipesList = (props) => {

  return (
    <div>
      {props.recipes.map((recipe, index) => <RecipesListItem key={index} {...recipe} handleRemoveRecipe={props.handleRemoveRecipe} handleEditRecipe={props.handleEditRecipe}/>)}
    </div>
  );
}

export default RecipesList;
