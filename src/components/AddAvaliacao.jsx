import React from 'react';
import PropTypes from 'prop-types';

class AddAvaliacao extends React.Component {
  render() {
    const { value, funcao } = this.props;
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

AddAvaliacao.propTypes = {
  value: PropTypes.number.isRequired,
  funcao: PropTypes.func.isRequired,
};

export default AddAvaliacao;
