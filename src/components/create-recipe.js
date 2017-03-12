import React from 'react';

const CreateRecipe = (props) => {

    let titleInput, ingrInput;

    const handleSubmit = (e) => {
      e.preventDefault();
      let titleText = titleInput.value;
      let ingrText = ingrInput.value;

      if (titleText.length > 0 && ingrText.length > 0) {
        titleInput.value = '';
        ingrInput.value = '';
        props.handleAddRecipe(titleText, ingrText);
      }
    }

    const removeRecipe = (e) => {
      e.preventDefault();
      document.getElementById('addbox').style.display = 'none';
    }


    const autosize = (e) => {
        e.target.style.cssText = 'height:auto; padding:0';
        e.target.style.cssText = 'height:' + e.target.scrollHeight + 'px';
    }

    return (
      <div id="addbox" className="box" style={{display: 'none'}}>
        <form onSubmit={handleSubmit} >
          <textarea className="input-title" onKeyDown={autosize} type="text" ref={ el => titleInput = el } placeholder="Recipe"/>
          <textarea className="input-ingr" ref={ el => ingrInput = el } placeholder="Ingredients (separated by commas)"/>
          <button className="btn">Save</button>
          <button className="btn-icon" onClick={removeRecipe} href="#"><span className="lnr lnr-trash"></span></button>
        </form>
      </div>
    );
}

export default CreateRecipe;
