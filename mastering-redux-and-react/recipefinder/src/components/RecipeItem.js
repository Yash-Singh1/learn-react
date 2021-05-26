import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setFavoriteRecipes,
  setBannerContent,
  setBannerRemoveTimer
} from '../actions';

class RecipeItem extends Component {
  constructor() {
    super();

    if (localStorage.getItem('favorites') === null) {
      localStorage.setItem('favorites', '[]');
    }

    this.state = {
      favorited: false
    };
  }

  favorite(recipe) {
    const newFavorites = JSON.parse(localStorage.getItem('favorites')).concat(
      recipe
    );
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    this.props.setFavoriteRecipes(newFavorites);
    this.setState({ favorited: true });
    this.props.setBannerContent(`Favorited: ${recipe.title}`);
    this.removeBannerTimer();
  }

  unfavorite(recipe) {
    const newFavorites = JSON.parse(localStorage.getItem('favorites')).filter(
      (someFavoriteRecipe) =>
        JSON.stringify(someFavoriteRecipe) !== JSON.stringify(recipe)
    );
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    this.props.setFavoriteRecipes(newFavorites);
    this.setState({ favorited: false });
    this.props.setBannerContent(`Unfavorited: ${recipe.title}`);
    this.removeBannerTimer();
  }

  removeBannerTimer() {
    clearTimeout(this.props.bannerRemoveTimer);
    this.props.setBannerRemoveTimer(
      setTimeout(() => this.props.setBannerContent(null), 3000)
    );
  }

  updateStarred() {
    let { recipe } = this.props;

    if (
      JSON.parse(localStorage.getItem('favorites')).find(
        (someFavoriteRecipe) =>
          JSON.stringify(someFavoriteRecipe) === JSON.stringify(recipe)
      )
    ) {
      if (this.state.favorited === false) {
        console.log(1);
        this.setState({ favorited: true });
      }
    } else if (this.state.favorited) {
      console.log(2);
      this.setState({ favorited: false });
    }
  }

  componentDidMount() {
    this.updateStarred();
  }

  componentDidUpdate() {
    this.updateStarred();
  }

  render() {
    let { recipe } = this.props;

    return (
      <div className="recipe-item">
        {this.state.favorited ? (
          <div
            unselectable="on"
            className="star unselectable"
            onClick={() => this.unfavorite(recipe)}
          >
            &#9733;
          </div>
        ) : (
          <div
            unselectable="on"
            className="star unselectable"
            onClick={() => this.favorite(recipe)}
          >
            &#9734;
          </div>
        )}
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img src={recipe.thumbnail} alt={recipe.title} className="recipe-img" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bannerRemoveTimer: state.bannerRemoveTimer
  };
}

export default connect(mapStateToProps, {
  setFavoriteRecipes,
  setBannerContent,
  setBannerRemoveTimer
})(RecipeItem);
