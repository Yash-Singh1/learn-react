import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById, clearAll } from '../actions/';

class HeroesList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className='list-group'>
          {
            this.props.heroes.map((hero) => {
              return (
                <li key={hero.id} className='list-group-item'>
                  <div className='list-item'>{hero.name} (<b>strength</b>: {hero.strength}, <b>intelligence</b>: {hero.intelligence}, <b>speed</b>: {hero.speed})</div>
                  <div
                    className='list-item right-button'
                    onClick={() => this.props.removeCharacterById(hero.id)}
                  >
                    &times;
                  </div>
                </li>
              );
            })
          }
        </ul>
        <button onClick={() => this.props.clearAll()} className='btn btn-info'>Clear All</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}

export default connect(mapStateToProps, { removeCharacterById, clearAll })(HeroesList);
