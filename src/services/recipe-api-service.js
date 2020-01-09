import TokenService from './token-service';
import config from '../config';

const RecipeApiService = {
    getRecipes() {
        return fetch(`${config.RECIPE_API_ENDPOINT}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return(
            (!res.ok)? res.json().then(e => Promise.reject(e)): res.json()
            )
        })
    },
    getRecipe(recipeId) {
        return fetch(`${config.RECIPE_API_ENDPOINT}/${recipeId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            }
        })
        .then(res => {
            (!res.ok)? res.json().then(e => Promise.reject(e)): res.json() 
        })
    },
    postRecipe(title, estimated_time, ingredients, directions) {
        return fetch(`${config.RECIPE_API_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title, estimated_time, ingredients, directions,
            }),
        })
        .then(res => {
            (!res.ok)? res.json().then(e => Promise.reject(e)): res.json() 
        })
    },
    deleteRecipe(recipeId) {
        return fetch (`${config.RECIPE_API_ENDPOINT}/${recipeId}`, {
            method: 'DELETE',
        })
    },
    patchRecipe(recipeId, title, estimated_time, ingredients, directions) {
        return fetch(`${config.RECIPE_API_ENDPOINT}/${recipeId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                title, estimated_time, ingredients, directions,
            }),
        })
        .then(res => {
            console.log(res)
            //(!res.ok)? res.json().then(e => Promise.reject(e)): res.json()
        })
    }
}

export default RecipeApiService