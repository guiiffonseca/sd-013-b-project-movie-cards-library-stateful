import React from 'react';
import PropTypes from 'prop-types';

export default class CreatSelect extends React.Component {
  render() {
    const { value, on } = this.props;
    return (
      <select
        name="genre"
        id="genre"
        data-testid="genre-input"
        value={ value }
        onChange={ on }
      >
        <option value="action" data-testid="genre-option">Ação</option>
        <option value="comedy" data-testid="genre-option">Comédia</option>
        <option value="thriller" data-testid="genre-option">Suspense</option>
      </select>
    );
  }
}

CreatSelect.propTypes = {
  value: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
};
