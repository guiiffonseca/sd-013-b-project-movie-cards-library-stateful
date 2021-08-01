import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ value }
          onChange={ onChange }
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
