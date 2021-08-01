import React, { Component } from 'react';
import PropTypes from 'prop-types';

const genreOptions = [
  { text: 'Ação', value: 'action', id: '#00' },
  { text: 'Comédia', value: 'comedy', id: '#01' },
  { text: 'Suspense', value: 'thriller', id: '#02' },
];

class GenreInput extends Component {
  render() {
    const { valor, onChange } = this.props;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ valor }
          id="genre-input"
          data-testid="genre-input"
          onChange={ onChange }
        >
          {genreOptions.map(({ text, value, id }) => (
            <option key={ id } value={ value } data-testid="genre-option">
              {text}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  valor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreInput;
