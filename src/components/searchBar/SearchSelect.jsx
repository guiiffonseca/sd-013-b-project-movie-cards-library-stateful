import React from 'react';
import PropTypes from 'prop-types';

class SearchSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select-movie"
        data-testid="select-input-label"
      >
        Filtrar por gênero:
        <select
          id="select-movie"
          className="search-field"
          data-testid="select-input"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
        >
          <option
            value=""
            data-testid="select-option"
          >
            Todos
          </option>
          <option
            value="action"
            data-testid="select-option"
          >
            Ação
          </option>
          <option
            value="comedy"
            data-testid="select-option"
          >
            Comédia
          </option>
          <option
            value="thriller"
            data-testid="select-option"
          >
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

SearchSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchSelect;
