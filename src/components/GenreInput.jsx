import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option
            data-testid="genre-option"
            value="action"
          >
            Ação
          </option>
          <option
            data-testid="genre-option"
            value="comedy"
          >
            Comédia
          </option>
          <option
            data-testid="genre-option"
            value="thriller"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default GenreInput;
