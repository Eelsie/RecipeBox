import React, { Component } from 'react';
import uuid from 'uuid';
import RecipesList from './recipes-list';
import CreateRecipe from './create-recipe';
import Search from './search';
import * as RecipesAPI from '../api/RecipesAPI';
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: RecipesAPI.getRecipes(),
      searchText: ''
    };

    this.handleAddRecipe = this.handleAddRecipe.bind(this);
    this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this);
    this.handleEditRecipe = this.handleEditRecipe.bind(this);
    this.showAddBox = this.showAddBox.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }


  componentWillMount() {
    RecipesAPI.setRecipes([
        {
          id: uuid(),
          title: 'Hamburger buns',
          ingredients: ['450 g flour', '200 ml water', '50 g sugar', '30 g butter', '1 egg', '1 ts salt', '2 ts yeast']
        },
        {
          id: uuid(),
          title: 'White bread',
          ingredients: ['460 g flour', '250 ml water', '1 ts sugar', '1 ts salt', '2 ts yeast']
        }
      ]);
  }

  componentDidUpdate() {
    RecipesAPI.setRecipes(this.state.recipes);
  }

  handleAddRecipe(title, ingr) {
    let ingrArr = ingr.split(",");
    this.setState({
      recipes: [
        ...this.state.recipes,
        {
          id: uuid(),
          title: title,
          ingredients: ingrArr
        }]
    });
    document.getElementById('addbox').style.display = 'none';
  }

  handleRemoveRecipe(id) {
    var filteredArray = this.state.recipes.filter((el) => el.id !== id);
    this.setState({
      recipes: filteredArray
    });
  }

  handleEditRecipe(id, ingr) {
    let ingrStr = ingr.replace(/(\r\n|\n|\r)/gm, ",");
    let ingrArr = ingrStr.split(",");
    ingrArr = ingrArr.filter(function(n){ return n !== "" });
    let title = ingrArr.splice(0,1);
    ingrArr.splice(-1,1);
    let index = this.state.recipes.findIndex((el) => el.id === id);
    const { recipes } = this.state;
    recipes[index].title = title;
    recipes[index].ingredients = ingrArr;
    this.setState({
      recipes: RecipesAPI.getRecipes()
    });
  }

  showAddBox(e) {
    e.preventDefault();
    let addbox = document.getElementById('addbox');
    if(addbox.style.display === 'none') {
      addbox.style.display = 'block';
    } else {
      addbox.style.display = 'none';
    }
  }

  onSearch(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    let { recipes, searchText} = this.state;
    let filteredRecipes = RecipesAPI.filterRecipes(recipes, searchText);
    return (
      <div className="wrapper">
        <div className="header clearfix">
          <h1>Recipe Box</h1>
          <button className="btn right big" onClick={this.showAddBox}>Add new recipe</button>
          <Search onSearch={this.onSearch} />
        </div>
        <div className="columns">
          <CreateRecipe handleAddRecipe={this.handleAddRecipe}/>
          <RecipesList recipes={filteredRecipes} handleRemoveRecipe={this.handleRemoveRecipe} handleEditRecipe={this.handleEditRecipe}/>
        </div>
        <div className="credits" >
          <a href="https://github.com/Eelsie/RecipeBox" target="_blank">Code on Github</a>
        </div>
      </div>
    );
  }

}

export default App;
