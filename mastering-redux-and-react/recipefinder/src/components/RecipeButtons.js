import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { search } from '../helpers';
import { setRecipes, setPage } from '../actions';
import { connect } from 'react-redux';

class RecipeButtons extends Component {
  async changePage(amount) {
    search({ ...this.props.search, page: this.props.page + amount }, (json) =>
      this.props.setRecipes(json.results)
    );
    await this.props.setPage(this.props.page + amount);
  }

  render() {
    return (
      <div>
        {this.props.recipes.length !== 0 ? (
          this.props.page === 1 ? (
            <Button onClick={() => this.changePage(1)}>Next</Button>
          ) : (
            <ButtonGroup>
              <Button onClick={() => this.changePage(-1)}>Previous</Button>
              <Button onClick={() => this.changePage(1)}>Next</Button>
            </ButtonGroup>
          )
        ) : this.props.page === 1 ? (
          <div></div>
        ) : (
          <div>
            <h4 className="recipe-title">No more recipes found</h4>
            <Button onClick={() => this.changePage(-1)}>Previous</Button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    page: state.page,
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, { setRecipes, setPage })(RecipeButtons);
