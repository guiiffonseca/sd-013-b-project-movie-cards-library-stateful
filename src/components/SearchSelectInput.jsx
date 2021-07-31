import React from 'react';
import PropTypes from 'prop-types';

function SearchSelectInput(props) {
  const { value, onSelectedGenreChange } = props;
  return (
    <label htmlFor="label-genre-filter" data-testid="select-input-label">
      Filtrar por gênero
      <select
        name=""
        value={ value }
        onChange={ onSelectedGenreChange }
        data-testid="select-input"
      >
        <option data-testid="select-option" value="">
          Todos
        </option>
        <option data-testid="select-option" value="action">
          Ação
        </option>
        <option data-testid="select-option" value="comedy">
          Comédia
        </option>
        <option data-testid="select-option" value="thriller">
          Suspense
        </option>
      </select>
    </label>
  );
}

SearchSelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchSelectInput;
