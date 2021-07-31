import React from 'react';
import PropTypes from 'prop-types';

class SearchBarSelect extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <section>
        <label
          data-testid="select-input-label"
          htmlFor="select-input"
        >
          Filtrar por gênero
          <select
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
            data-testid="select-input"
          >
            <option data-testid="select-option" value="">Todos</option>
            <option data-testid="select-option" value="action">Ação</option>
            <option data-testid="select-option" value="comedy">Comédia</option>
            <option data-testid="select-option" value="thriller">Suspense</option>
          </select>
        </label>
      </section>
    );
  }
}

SearchBarSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBarSelect;
