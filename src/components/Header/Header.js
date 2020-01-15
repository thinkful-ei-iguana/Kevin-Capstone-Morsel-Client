import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Header.css';

export default class Header extends Component {
  state = {
    shown: false
  }

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    handleMenuClick = () => {
      this.setState({shown: !this.state.shown})
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
                <div className='link-container'>
                  <Link className='test-class'
                    to='/'>
                      <h1>Morsel</h1> 
                  </Link>
                </div>
                <button
                  onClick={this.handleMenuClick}
                >
                Test
                </button>

                {TokenService.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink()}
            </nav>
        )
    }
}