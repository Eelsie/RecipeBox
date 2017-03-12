import React from 'react';

const RecipesListItem = (props) => {


    const removeRecipe = (e) => {
      e.preventDefault();
      props.handleRemoveRecipe(props.id);
    }

    const editRecipe = (e) => {
      e.preventDefault();
      let ingr = e.currentTarget.innerText;
      props.handleEditRecipe(props.id, ingr);
      e.target.style.color = '#333';
      e.target.lastChild.firstChild.style.visibility = 'hidden';
      e.target.contentEditable = false;
    }

    const makeEditable = (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.contentEditable = true;
      e.target.parentElement.parentElement.style.color = '#999';
      e.target.parentElement.firstChild.style.visibility = 'visible';
    }

    const openRecipe = (e) => {
      e.preventDefault();
      if(e.target.nextElementSibling.style.display === 'none') {
        e.target.nextElementSibling.style.display = 'block';
        e.target.nextElementSibling.nextElementSibling.style.display = 'block';
      } else if (e.target.parentElement.contentEditable === false){
        e.target.nextElementSibling.style.display = 'none';
        e.target.nextElementSibling.nextElementSibling.style.display = 'none';
      }
    }


    return (
      <div className="box">
        <form id="editable" onSubmit={editRecipe}>
          <h2 id="title" onClick={openRecipe}>{props.title}</h2>
          <ul id="ingr" style={{display: 'none'}}>
          {props.ingredients.map(function(ingredient, index) { return <li key={index}>{ingredient}</li>})}
          </ul>
          <div className="buttons" style={{display: 'none'}}>
            <button id="save-btn" className="btn" href="#">Save</button>
            <button className="btn-icon" onClick={removeRecipe} href="#"><span className="lnr lnr-trash"></span></button>
            <button className="btn-icon lnr lnr-pencil" onClick={makeEditable} href="#"></button>
          </div>
      </form>
      </div>
    );
}

export default RecipesListItem;
