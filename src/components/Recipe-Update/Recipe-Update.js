import React, { Component } from 'react';
import RecipeApiService from '../../services/recipe-api-service';
import LoggedInHeader from '../Logged-In-Header/Logged-In-Header';

export default class RecipeUpdate extends Component {
    state = {
        newTitle: '',
        newTime: '',
        newDirections: '',
        newIngredients: ''
    }

    setNewTitle = (newTitle) => {
        this.setState({newTitle: newTitle})
    }

    setNewTime = (newTime) => {
        this.setState({newTime: newTime})
    }

    setNewDirections = (newDirections) => {
        this.setState({newDirections: newDirections})
    }

    setNewIngredients = (newIngredients) => {
        this.setState({newIngredients: newIngredients})
    }

    handleFormSubmit = (id) => {
        RecipeApiService.patchRecipe(id, this.state.newTitle, this.state.newTime, this.state.newIngredients, this.state.newDirections)
        this.props.history.push('/recipes')
    }

    handleCancelClicked = (e) => {
        e.preventDefault()
        this.props.history.push('/recipes')
    }

    render () {
        return (
            <div>
                <LoggedInHeader/>
                <p>Current title: {this.props.location.recipe.title}</p>
                <form className="update-title">
                    <label
                        htmlFor="new-title"
                    >
                    New title
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Better spaghetti"
                        name="new-name"
                        onChange={event => {
                            this.setNewTitle(event.target.value)
                        }}
                    />
                </form>
                <p>Current prep time: {this.props.location.recipe.estimated_time}</p>
                <form className="updated-time">
                    <label
                        htmlFor="new-time"
                    >
                    New prep time
                    </label>
                    <input
                        type="text"
                        placeholder="ex. 10 minutes"
                        name="new-time"
                        onChange={event => {
                            this.setNewTime(event.target.value)
                        }}
                    />
                </form>
                <p>Current directions: {this.props.location.recipe.directions}</p>
                <form className="updated-directions">
                    <label
                        htmlFor="new-directions"
                    >
                    New directions
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Heat up a pot and put noodles in"
                        name="new-directions"
                        onChange={event => {
                            this.setNewDirections(event.target.value)
                        }}
                    />
                </form>
                <p>Current ingredients: {this.props.location.recipe.ingredients}</p>
                <form>
                    <label
                        htmlFor="new-ingredients"
                    >
                    New ingredient list (Please seperate each ingredient with a comma)
                    </label>
                    <input
                        type="text"
                        placeholder="ex. Noodles, Tomato Sauce, Paprika"
                        name="new-ingredients"
                        onChange={event => {
                            this.setNewIngredients(event.target.value)
                        }}
                    />
                </form>
                <button
                    onClick={() => this.handleFormSubmit(this.props.location.recipe.id)}
                >
                Submit Changes
                </button>
                <button
                    onClick={this.handleCancelClicked}
                >
                Cancel
                </button>
            </div>
        )
    }
}