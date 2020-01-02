import React, { Component } from 'react'
import RecipeApiService from '../services/recipe-api-service'
import Recipe from '../components/Recipe/Recipe'
import RecipeListContext from '../contexts/RecipeListContext'

export default class RecipeList extends Component {
    static contextType = RecipeListContext

    componentDidMount() {
        this.context.clearError()
        RecipeApiService.getRecipes()
          .then(this.context.setRecipeList)
          .catch(this.context.setError)
    }

    renderRecipes() {
        const { recipeList = [] } = this.context
        return recipeList.map(recipe => 
            <Recipe
              key={recipe.id}
              recipe={recipe}
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
            /*<this.recipeSection list className='RecipeList'>
                {error ? <p>There was an error, try again</p> : this.renderRecipes()}
            </this.recipeSection>*/
            this.renderRecipes()
        )
    }
}