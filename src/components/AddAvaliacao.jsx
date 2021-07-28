import React from 'react';

class AddAvaliacao extends React.Component {
  render() {
    const { value } = this.props;
    const { funcao } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          type="number"
          value={ value }
          name="rating"
          data-testid="rating-input"
          onChange={ funcao }
        />
      </label>
    );
  }
}

export default AddAvaliacao;
