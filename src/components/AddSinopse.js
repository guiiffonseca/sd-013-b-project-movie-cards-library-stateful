import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddSinopse extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="input-area" data-testid="storyline-input-label">
        Sinopse
        <textarea
          id="input-area"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
          name="storyline"
        />
      </label>
    );
  }
}

AddSinopse.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
