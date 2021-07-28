import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select-input"
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value={ selectedGenre }>
            Todos
          </option>
          <option data-testid="select-option" value={ selectedGenre }>
            Ação
          </option>
          <option data-testid="select-option" value={ selectedGenre }>
            Comédia
          </option>
          <option data-testid="select-option" value={ selectedGenre }>
            Suspense
          </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
