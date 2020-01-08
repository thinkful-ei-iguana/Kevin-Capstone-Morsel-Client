import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class LoggedInHeader extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return (
            <div className='Header__logged-in'>
              <Link
                onClick={TokenService.clearAuthToken}
                to='/'>
                Logout
              </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='Header'>
                <Link to='/menu'>
                    <h1>Morsel</h1> 
                </Link>
                <Link to='/recipes'>
                    <p>My Recipes</p>
                </Link>
                <Link to='/menu'>
                    <p>My Menu</p>
                </Link>
                {this.renderLogoutLink()}
            </nav>
        )
    }
}