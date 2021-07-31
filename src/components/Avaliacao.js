import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends Component {
  render() {
    const { value, handleRating } = this.props;
    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          id="avaliacao"
          name=""
          data-testid="rating-input"
          type="number"
          value={ value }
          onChange={ handleRating }
        />
      </label>
    );
  }
}

Avaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  handleRating: PropTypes.func.isRequired,
};

export default Avaliacao;
