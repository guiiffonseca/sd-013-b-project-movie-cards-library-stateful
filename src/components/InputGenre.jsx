import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputGenre extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        <select
          name="genre"
          data-testid="genre-input"
          id="genre"
          value={ value }
          onChange={ onChange }
        >
          Gênero
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
