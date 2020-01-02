import TokenService from './token-service';
import config from '../config';

const PantryApiService = {
    getPantry() {
        return fetch(`${TokenService.getAuthToken()}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            (!res.ok)? res.json().then(e => Promise.reject(e)): res.json()
        })
    },
    postItem(item_name, quantity) {
        return fetch(`${config.PANTRY_API_ENDPOINT}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ 
                item_name, quantity
            })
        })
        .then(res => {
            (!res.ok)? res.json().then(e => Promise.reject(e)): res.json() 
        })
    },
    deleteItem(id) {
        return fetch
    },
    patchItem(id) {

    }
}