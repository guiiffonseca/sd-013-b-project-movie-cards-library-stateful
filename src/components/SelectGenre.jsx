import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends Component {
  render() {
    const { label, id, name } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-label` }>
        {`${label}`}
        <select data-testid={ id } name={ name }>
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default SelectGenre;

SelectGenre.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
