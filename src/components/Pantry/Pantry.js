import React, { Component } from 'react';

export default class Menu extends Component {

    render() {
        return (
            <ul>
                <li>
                    <p>Example Food</p>
                    <form>
                        <label htmlFor="item">Quantity: </label>
                        <input type="number" name="item" id="item"/>
                        <label htmlFor="size">Size: </label>
                        <select name="size" id="size"></select> <br/>
                        <button>Delete</button>
                    </form>
                </li>
            </ul>
        )
    }
}