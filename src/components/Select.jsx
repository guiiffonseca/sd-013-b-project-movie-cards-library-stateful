import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          type="text"
          value={ valor }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  valor: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
