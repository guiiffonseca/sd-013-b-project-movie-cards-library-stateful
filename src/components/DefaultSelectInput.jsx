import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultSelectInput extends React.Component {
  render() {
    const { name, labelText, value, handleChange } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {labelText}
        <select
          onChange={ handleChange }
          name={ name }
          value={ value }
          data-testid={ `${name}-input` }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

DefaultSelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
