import React from 'react';
import PropTypes from 'prop-types';

class SelectGender extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <label
          htmlFor="genre-input"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            data-testid="genre-input"
            name="genre"
            id="genre-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
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
      </div>
    );
  }
}

SelectGender.propTypes = {
  selectedGenre: PropTypes.string
    .isRequired,
  onSelectedGenreChange: PropTypes.func
    .isRequired,
};

export default SelectGender;
