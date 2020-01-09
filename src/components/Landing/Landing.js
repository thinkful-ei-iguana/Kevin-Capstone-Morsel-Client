import React, { Component } from 'react';
import './Landing.css'
import Header from '../Header/Header'

export default class Landing extends Component {

    render() {
        return(
            <div>
                <Header/>
                <section>
                    <header role="banner">
                        <h2>Meals made easy</h2>
                    </header>
                    <section className="meal-plan">
                        <header>
                            <h3>Plan a Menu</h3>
                        </header>
                        <div className="img-stand-in">screenshot of your weekly meals</div>
                        <p>Morsel makes answering the question "what should I eat" easy.  
                        By building a menu out of your favorite meals, deciding what
                        to eat is a breeze.</p>
                    </section>
                    <section className="recipes">
                        <header>
                            <h3>Record Recipes</h3>
                        </header>
                        <div className="img-stand-in">screenshot of a recipe list</div>
                        <p>Morsel stores your favorite recipes to help build your menu. 
                        You can even filter through your recipes to use specific ingredients.</p>
                    </section>
                    <section className="pantry">
                        <header>
                            <h3>Organize Ingredients</h3>
                        </header>
                        <div className="img-stand-in">screenshot of list of ingredients</div>
                        <p>Keep track of what you have and what you need using Morsel's 
                        pantry feature.</p>
                    </section>
                    <section className="shopping-list">
                        <header>
                            <h3>SHOPPING</h3>
                        </header>
                        <div className="img-stand-in">screenshot of a shopping list</div>
                        <p>Missing a few ingredients for one of your favorite meals?
                        Morsel will build you a shopping list to make sure you have
                        everything you need to make everything on the menu.</p>
                    </section>
                    <section className="signup">
                        <header>
                            <h3>SIGNUP</h3>
                        </header>
                        <form className="signup-form">
                            <label htmlFor="name">Username</label>
                            <input type="text" placeholder="Your name here!" name="name" id="name" required/>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" required/>
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" id="password"/>
                            <button type="submit">Sign Up!</button>
                        </form>
                    </section>
                </section>
            </div>
        )
    }
}