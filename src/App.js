import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Pantry from './components/Pantry/Pantry';
import RecipeList from './components/Recipe-List/Recipe-List';
import RecipeForm from './components/Recipe-Form/Recipe-Form';
import RecipeUpdate from './components/Recipe-Update/Recipe-Update';
import ShoppingList from './components/Shopping-List/Shopping-List';
import Landing from './components/Landing/Landing';
import NotFound from './components/Not-Found/Not-Found';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

class App extends Component {
  state={ hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
        <main>
          <Switch>
            <Route exact path={'/'} component={Landing}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/recipes'} component={RecipeList}/>
            <Route path={'/menu'} component={Menu}/>
            <Route path={'/pantry'} component={Pantry}/>
            <Route path={'/recipe-form'} component={RecipeForm}/>
            <Route path={'/recipe-update'} component={RecipeUpdate}/>
            <Route path={'/shopping-list'} component={ShoppingList}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
    );
  }
}

export default App;