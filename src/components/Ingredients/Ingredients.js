import React, { Component } from 'react';


export default class Ingredients extends Component {

    removeIngredient = () => {
        //does this go here or on the recipe-form component?
    }

    render() {
        const { ingredient } = this.props

        return(
            <p>{ingredient}</p>
        )
    }
}








/*
export default class Ingredients extends Component {
    state = {
        ingredients: ['beans', 'rice', 'cheese'],
    }

    setIngredients = (newIngredient) => {
        this.setState({ingredients: [...this.state.ingredients, newIngredient]})
    }

    renderAddedIngredients = () => {
        console.log('renderAddedIngredients ran')
        const addedIngredientsList = this.state.ingredients
        console.log('addedIngredientsList is' && addedIngredientsList)
        return addedIngredientsList.map(ingredient => 
            <p>{ingredient}</p>
        )
    }
    
    render() {

        return (
            <div>
                <form
                    className="ingredient-form"
                >
                    <label 
                        htmlFor="ingredient-name"
                    >
                    Ingredient Name
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Tomato Sauce"
                        name="ingredient-name"
                    />
                    <button>
                        Add
                    </button>
                </form>
                <h3>Ingredient List</h3>
                {this.renderAddedIngredients()}
            </div>
        )
    }
}
*/