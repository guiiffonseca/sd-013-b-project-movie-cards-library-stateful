import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitulo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          value={ value }
          name="subtitle"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
