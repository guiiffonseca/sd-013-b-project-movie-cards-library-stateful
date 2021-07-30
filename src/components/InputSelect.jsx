import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { selectedGenre, onSelectedChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="select-input-label">
        Filtrar por gênero
        <select
          data-testid="select-input"
          name="selectedGenre"
          id="select-input"
          value={ selectedGenre }
          onChange={ onSelectedChange }
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

InputSelect.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedChange: PropTypes.func.isRequired,
};

export default InputSelect;
