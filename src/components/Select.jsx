import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <label
        data-testid="select-input-label"
        htmlFor="selectedGenre"
      >
        Filtrar por gênero
        <select
          data-testid="select-input"
          id="selectedGenre"
          type="select"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          name="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default Select;
