import React, { Component } from 'react';

const RecipeListContext = React.createContext({
    recipeList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setRecipeList: () => {},
})
export default RecipeListContext

export class RecipeListProvider extends Component {
    state = {
        recipeList: [],
        error: null,
    };

    setRecipeList = recipeList => {
        this.setState({ recipeList })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({error: null})
    }

    render() {
        const value = {
            recipeList: this.state.recipeList,
            error: this.state.error,
            setError: this.state.setError,
            clearError: this.state.clearError,
            setRecipeList: this.state.setRecipeList,
        }
        return (
            <RecipeListContext.Provider value={ value }>
                {this.props.children}
            </RecipeListContext.Provider>
        )
    }
}