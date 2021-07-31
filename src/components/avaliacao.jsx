import React from 'react';
import PropTypes from 'prop-types';

class Avaliacao extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
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
