import React, { Component } from 'react';
import RecipeApiService from '../../services/recipe-api-service';

export default class Recipe extends Component {

    handleDeleteRecipe = (id) => {
        RecipeApiService.deleteRecipe(id)
        .then(this.props.updateRecipes)
    }

    render() {
       const { recipe } = this.props

       return(
               <div className='recipe'>
                   <h2>{recipe.title}</h2>
                   <p>Estimated prep time: {recipe.estimated_time}</p>
                   <p>Required ingredients: {recipe.ingredients}</p>
                   <p>Directions: {recipe.directions}</p>
                   <button
                   onClick={() => this.handleDeleteRecipe(recipe.id)}
                   >
                    Delete Recipe
                    </button>
                    <button>Update Recipe</button>
               </div>
       )
    }
}