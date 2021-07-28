import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Sinopse extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <input
          type="text"
          data-testid="storyline-input"
          value={ value }
          name="storyline"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Sinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
