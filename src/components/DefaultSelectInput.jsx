import React from 'react';
import PropTypes from 'prop-types';

export default class DefaultSelectInput extends React.Component {
  render() {
    const { name, labelText } = this.props;
    return (
      <label htmlFor={ name } data-testid={ `${name}-input-label` }>
        {labelText}
        <select name={ name } data-testid={ `${name}-input` }>
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

DefaultSelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};
