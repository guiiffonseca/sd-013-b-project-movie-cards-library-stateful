import React from 'react';
import PropTypes from 'prop-types';

export default class Select extends React.Component {
  render() {
    const { onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="select-input"
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
}

Select.propTypes = {
  // selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};
