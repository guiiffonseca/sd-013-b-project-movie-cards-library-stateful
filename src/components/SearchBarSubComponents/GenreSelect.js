import React from 'react';
import PropTypes from 'prop-types';

export default class GenreSelect extends React.Component {
  render() {
    const { onSelectedGenreChange, selectedGenre } = this.props;
    return (
      <label data-testid="select-input-label" htmlFor="selectGenre">
        Filtrar por gênero
        <select
          type="select"
          onChange={ onSelectedGenreChange }
          id="selectGenre"
          value={ selectedGenre }
          name="selectedGenre"
          data-testid="select-input"
        >
          <option
            value=""
            htmlFor="selectGenre"
            data-testid="select-option"
          >
            Todos
          </option>
          <option
            value="action"
            htmlFor="selectGenre"
            data-testid="select-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            htmlFor="selectGenre"
            data-testid="select-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            htmlFor="selectGenre"
            data-testid="select-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

GenreSelect.propTypes = {
  onSelectedGenreChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
};
