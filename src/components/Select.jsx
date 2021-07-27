import React from 'react';
import PropTypes from 'prop-types';

function Select({
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <label
      data-testid="select-input-label"
      htmlFor="Genre"
    >
      Filtrar por gênero:
      <select
        data-testid="select-input"
        id="Genre"
        onChange={ onSelectedGenreChange }
        value={ selectedGenre }
      >
        <option
          data-testid="select-option"
          value=""
        >
          Todos
        </option>
        <option
          data-testid="select-option"
          value="action"
        >
          Ação
        </option>
        <option
          data-testid="select-option"
          value="comedy"
        >
          Comédia
        </option>
        <option
          data-testid="select-option"
          value="thriller"
        >
          Suspense
        </option>
      </select>
    </label>
  );
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select;
