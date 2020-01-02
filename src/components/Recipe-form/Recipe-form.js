import React, { Component } from 'react';

export default class RecipeForm extends Component {

    render() {
        return (
            <section>
                <h2>Add a recipe</h2>
                <form className="recipe-form">
                    <label htmlFor="recipe-name">Recipe name</label>
                    <input type="text" placeholder="ex. Mom's spaghetti" name="recipe-name" id="recipe-name" required/>
                    <label htmlFor="prep-time">Preparation time</label>
                    <input type="text" placeholder="ex. 20 minutes" name="prep-time" id="prep-time"/>
                    <label htmlFor="ingredient">Ingredient name</label>
                    <input type="text" placeholder="ex. Tomato Sauce" name="ingredient" id="ingredient" required/>
                    <label htmlFor="quantity">Ingredient quantity</label>
                    <input type="number" placeholder="ex. 1" name="quantity" id="quantity" required/>
                    <label htmlFor="measurement">Measurement</label>
                    <select name="measurement" id="measurement"></select>
                    <button class="more">Add another ingredient</button>
                    <label htmlFor="directions">Directions</label>
                    <input type="text" name="directions" id="directions"/>
                    <button className="submit">Submit</button>
                </form>
            </section>
        )
    }
}