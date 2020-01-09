import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecipeListProvider } from './contexts/RecipeListContext';
import { RecipeProvider } from './contexts/RecipeContext';

ReactDOM.render(
    <BrowserRouter>
        <RecipeListProvider>
            <RecipeProvider>
                <App/>
            </RecipeProvider>
        </RecipeListProvider>
    </BrowserRouter>, 
document.getElementById('root'));