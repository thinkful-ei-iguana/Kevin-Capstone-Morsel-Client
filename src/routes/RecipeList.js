import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeApiService from '../services/recipe-api-service';
import Recipe from '../components/Recipe/Recipe';
import RecipeListContext from '../contexts/RecipeListContext';
import LoggedInHeader from '../components/Logged-In Header/Logged-In_Header';

export default class RecipeList extends Component {
    static contextType = RecipeListContext

    updateRecipes = () => {
        this.context.clearError()
        RecipeApiService.getRecipes()
          .then(this.context.setRecipeList)
          .catch(this.context.setError)
    }

    componentDidMount() {
        this.updateRecipes()
    }

    renderRecipes() {
        const { recipeList = [] } = this.context
        return recipeList.map(recipe => 
            <Recipe
              key={recipe.id}
              recipe={recipe}
              updateRecipes={this.updateRecipes}
            />
        )
    }

    recipeSection({ className, list, ...props }) {
        const classes = [
            'Section',
            list && 'Section--list',
            className,
        ].filter(Boolean).join(' ')
        return (
            <section className={ classes } { ...props }/>
        )
    }

    render() {
        const { error } =this.context
        return (
            <div>
                <LoggedInHeader/>
                <h2>My Recipes</h2>
                <this.recipeSection list className='RecipeList'>
                    {error ? <p>There was an error, try again</p> : this.renderRecipes()}
                </this.recipeSection>
                <Link to='/recipe-form'>
                    <button>Add Recipe</button>
                </Link>
            </div>
        )
    }
}