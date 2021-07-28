import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FormGenre extends Component {
  render() {
    const { genre, callback } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          id="genre"
          value={ genre }
          data-testid="genre-input"
          onChange={ callback }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

FormGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
