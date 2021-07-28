import React from 'react';
import PropTypes from 'prop-types';

class SearchBarSelectedGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="selectedGenre" data-testid="select-input-label">
        Filtrar por gênero
        <select
          id="selectedGenre"
          name="selectedGenre"
          data-testid="select-input"
          value={ value }
          onChange={ onChange }
        >
          <option value="" data-testid="select-option">Todos</option>
          <option value="action" data-testid="select-option">Ação</option>
          <option value="comedy" data-testid="select-option">Comédia</option>
          <option value="thriller" data-testid="select-option">Suspense</option>
        </select>
      </label>
    );
  }
}

SearchBarSelectedGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBarSelectedGenre;
