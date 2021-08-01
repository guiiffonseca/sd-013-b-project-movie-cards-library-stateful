import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GenreSelect extends Component {
  render() {
    const { genreValue, handleChange } = this.props;
    return (
      <label htmlFor="true" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          name="genre"
          value={ genreValue }
          onChange={ handleChange }
        >
          <option selected value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  genreValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
