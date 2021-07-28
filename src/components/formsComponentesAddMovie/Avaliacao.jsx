import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Avaliacao extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          value={ value }
          name="rating"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
