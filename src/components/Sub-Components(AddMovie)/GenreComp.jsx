/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class GenreComp extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label">
          Gênero
          <select data-testid="genre-input" value={ genre } onChange={ handleChange }>
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

GenreComp.propTypes = {
  genre: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
