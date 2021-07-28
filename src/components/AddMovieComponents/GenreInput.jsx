import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genre-input"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id=""
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action"> Ação </option>
          <option data-testid="genre-option" value="comedy"> Comédia </option>
          <option data-testid="genre-option" value="thriller"> Suspense </option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreInput;
