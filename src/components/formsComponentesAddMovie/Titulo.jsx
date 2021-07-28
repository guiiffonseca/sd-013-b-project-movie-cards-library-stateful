import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Titulo extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Titulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
