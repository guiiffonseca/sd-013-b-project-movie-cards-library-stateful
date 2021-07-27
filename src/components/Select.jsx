import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const {
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <label
          htmlFor="select-input"
          data-testid="select-input-label"
        >
          Filtrar por gênero
          <select
            data-testid="select-input"
            name=""
            id="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
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
      </div>
    );
  }
}

Select.propTypes = {
  selectedGenre: PropTypes.string
    .isRequired,
  onSelectedGenreChange: PropTypes.func
    .isRequired,
};

export default Select;
