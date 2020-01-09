import React, { Component } from 'react';
import LoggedInHeader from '../Logged-In-Header/Logged-In-Header';
import RecipeApiService from '../../services/recipe-api-service';

export default class RecipeForm extends Component {
    state = {
        title: null,
        estimated_time: null,
        directions: null,
        ingredients: [],
        currentIngredient: ''
    }

    addIngredientToArray = (newIngredient) => {
        this.setState({ingredients: [...this.state.ingredients, newIngredient]})
    }

    setRecipeTitle = (newTitle) => {
        this.setState({title: newTitle})
    }

    setRecipeEstimatedTime = (newTime) => {
        this.setState({estimated_time: newTime})
    }

    setRecipeDirections = (newDirections) => {
        this.setState({directions: newDirections})
    }

    setCurrentIngredient = (currentIngredient) => {
        this.setState({currentIngredient: currentIngredient})
    }

    setRecipeIngredients = () => {
        let newIngredients = this.state.ingredients
        if (!newIngredients.includes(this.state.currentIngredient)) {
            newIngredients.push(this.state.currentIngredient)
            this.setState({currentIngredient: ''})
            this.setState({ingredients: newIngredients})
        }
        else {
            alert(`This recipe already contains ${this.state.currentIngredient}`)
        }
    }

    removeIngredient = (ingredient) => {
        const arryToFilter = this.state.ingredients
        let filteredArry = arryToFilter.filter(item => item !== ingredient)
        this.setState({ingredients: filteredArry})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        let postIngredients = this.state.ingredients.toString()
        RecipeApiService.postRecipe(this.state.title, this.state.estimated_time, postIngredients, this.state.directions)
        .then(this.props.history.push('/recipes'))
    }

    handleCancelClicked = (e) => {
        e.preventDefault()
        this.props.history.push('/recipes')
    }

    renderIngredientList = () => {
        const ingredientList = this.state.ingredients
        return ingredientList.map(ingredient =>
            <div>
                <p>{ingredient}</p>
                <button onClick={() => this.removeIngredient(ingredient)}>Remove Ingredient</button>
            </div>
        )
    }

    render() {

        return (
            <div>
                <LoggedInHeader/>
                <section>
                    <h2>Add a recipe</h2>
                    <form 
                        className="recipe-form"
                    >
                        <label 
                            htmlFor="recipe-name"
                        >
                        Recipe name
                        </label>
                        <input 
                            type="text" 
                            placeholder="ex. Mom's spaghetti" 
                            name="recipe-name" 
                            id="recipe-name"
                            onChange={event => {
                                this.setRecipeTitle(event.target.value)
                            }} 
                            required
                        />
                        <label 
                            htmlFor="prep-time"
                        >
                        Preparation time
                        </label>
                        <input 
                            type="text" 
                            placeholder="ex. 20 minutes" 
                            name="prep-time" 
                            id="prep-time"
                            onChange={event => {
                                this.setRecipeEstimatedTime(event.target.value)
                            }}
                            required
                        />
                        <label 
                            htmlFor="ingredient"
                            required
                        >
                        Ingredient name
                        </label>
                        <input 
                            type="text" 
                            placeholder="ex. Tomato Sauce" 
                            name="ingredient" 
                            id="ingredient" 
                            value={this.state.currentIngredient}
                            onChange={event => {
                                this.setCurrentIngredient(event.target.value)
                            }}
                            /*required*/
                        />
                        <button 
                            className="more"
                            type="button"
                            onClick={this.setRecipeIngredients}
                        >
                        Add another ingredient
                        </button>
                        <label 
                            htmlFor="directions"
                        >
                        Directions
                        </label>
                        <input 
                            type="text" 
                            name="directions" 
                            id="directions"
                            onChange={event => {
                                this.setRecipeDirections(event.target.value)
                            }}
                            required
                        />
                        <button 
                            className="submit"
                            onClick={this.handleFormSubmit}
                        >
                        Submit
                        </button>
                        <button
                            className="cancel"
                            onClick={this.handleCancelClicked}
                        >
                        Cancel
                        </button>
                    </form>
                </section>
                <h2>Recipe Ingredients</h2>
                {this.renderIngredientList()}
            </div>
        )
    }
}