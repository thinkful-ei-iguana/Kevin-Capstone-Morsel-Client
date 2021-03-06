import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeApiService from '../../services/recipe-api-service';

export default class Recipe extends Component {

    handleDeleteRecipe = (id) => {
        RecipeApiService.deleteRecipe(id)
        .then(this.props.updateRecipes)
    }

    render() {
       const { recipe } = this.props
       console.log(recipe)

       return(
            <section>
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
                    <Link to={{
                        pathname: `/recipe-update/${recipe.id}`,
                        recipe: recipe,
                    }}>
                        <button>Edit Recipe</button>
                    </Link>
               </div>
            </section>
       )
    }
}