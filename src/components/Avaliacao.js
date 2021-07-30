import React, { Component } from 'react';

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

export default Avaliacao;
