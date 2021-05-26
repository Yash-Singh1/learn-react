import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';
import RecipeButtons from './RecipeButtons';
import Banner from './Banner';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecipeList />
        <RecipeButtons />
        <Banner />
      </div>
    );
  }
}

export default App;
