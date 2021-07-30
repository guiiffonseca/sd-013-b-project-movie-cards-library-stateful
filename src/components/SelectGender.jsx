import React from 'react';
import PropTypes from 'prop-types';

class SelectGender extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="select-input" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input"
          id="select-input"
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

SelectGender.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectGender;
