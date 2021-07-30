import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          id="Avaliação"
          name="Avaliação"
          type="number"
          data-testid="rating-input"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}
Avaliacao.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Avaliacao;
