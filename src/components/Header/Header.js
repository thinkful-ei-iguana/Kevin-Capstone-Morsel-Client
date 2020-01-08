import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class Header extends Component {
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

    renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/login'>
              Login
            </Link>
            <Link
              to='/register'>
              Register
            </Link>
          </div>
        )
      }

    render() {
        return (
            <nav className='Header'>
                <Link to='/'>
                    <h1>Morsel</h1> 
                </Link>
                {TokenService.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink()}
            </nav>
        )
    }
}