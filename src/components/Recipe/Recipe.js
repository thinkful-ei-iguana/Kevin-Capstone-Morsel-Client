import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Recipe extends Component {

    render() {
       const { recipe } = this.props

       return(
           <Link to={`/recipe/${recipe.id}`} className='recipeId'>
               <div className='recipe'>
                   <h2>{recipe.title}</h2>
                   <p>{recipe.estimated_time}</p>
                   <p>{recipe.ingredients}</p>
                   <p>{recipe.directions}</p>
               </div>
           </Link>
       )
    }
}