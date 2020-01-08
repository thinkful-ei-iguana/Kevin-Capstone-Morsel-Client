import React, { Component } from 'react';
import Header from '../Header/Header';

export default class Register extends Component {

    render() {
        return(
            <div>
                <Header/>
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
            </div>
        )
    }
} 