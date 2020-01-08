import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import Header from '../Header/Header';

export default class Login extends Component {
    static defaultProps = {
        onLoginSuccess: ()=> {}
    }

    state = { error: null }

    handleSubmitAuth = e => {
        e.preventDefault()
        const { user_name, password } = e.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )
            console.log(TokenService)
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    render() {
        const { error } = this.state
        return (
            <div>
                <Header/>
                <form className="login" onSubmit={this.handleSubmitAuth}>
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>
                    <div className='user_name'>
                    <label htmlFor='LoginForm__user_name'>
                        User name
                    </label>
                    <input
                        required
                        name='user_name'
                        id='LoginForm__user_name'>
                    </input>
                    </div>
                    <div className='password'>
                    <label htmlFor='LoginForm__password'>
                        Password
                    </label>
                    <input
                        required
                        name='password'
                        type='password'
                        id='LoginForm__password'>
                    </input>
                    </div>
                    <button type='submit'>
                    Login
                    </button>
                </form>
            </div>
        )
    }
}