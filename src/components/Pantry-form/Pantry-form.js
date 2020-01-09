import React, { Component } from './node_modules/react';


export default class PantryForm extends Component {

    render() {
        return (
            <section>
                <h2>Add new item</h2>
                <form className="new-item">
                    <label htmlFor="name">Name: </label>
                    <input type="text" placeholder="e.g. Apple" name="name" id="name" required/>
                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" name="quantity" id="quantity" placeholder="e.g. 2" required/>
                    <label htmlFor="size">Size: </label>
                    <select name="size" id="size"></select>
                    <button type="submit">Add Item</button>
                </form>
            </section>
        )
    }
}