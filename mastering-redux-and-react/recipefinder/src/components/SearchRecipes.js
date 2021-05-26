import React, { Component } from 'react';
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes, setSearch, setPage } from '../actions';
import { search } from '../helpers';

class SearchRecipes extends Component {
  constructor() {
    super();

    this.state = {
      ingredients: '',
      dish: ''
    };
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <FormLabel>Ingredients</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="garlic, chicken"
            onChange={(event) =>
              this.setState({ ingredients: event.target.value })
            }
          />
        </FormGroup>{' '}
        <FormGroup>
          <FormLabel>Dish</FormLabel>{' '}
          <FormControl
            type="text"
            placeholder="abodo"
            onChange={(event) => this.setState({ dish: event.target.value })}
          />
        </FormGroup>{' '}
        <Button
          onClick={() => {
            this.props.setSearch({
              ...this.state,
              number: this.props.search.number + 1
            });
            this.props.setPage(1);
            search({ ...this.props.search, page: 1 }, (json) => {
              this.props.setRecipes(json.results);
            });
          }}
        >
          Search
        </Button>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps, { setRecipes, setSearch, setPage })(
  SearchRecipes
);
