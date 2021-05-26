import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    // console.log('this.props', this.props)
    return (
      <div>
        {this.props.favoriteRecipes.length > 0 ? (
          <h4 className="link">
            <Link to="/favorites">Favorites</Link>
          </h4>
        ) : (
          <div></div>
        )}
        {this.props.recipes.map((recipe, index) => {
          return <RecipeItem key={index} recipe={recipe} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    favoriteRecipes: state.favoriteRecipes
  };
}

export default connect(mapStateToProps)(RecipeList);
