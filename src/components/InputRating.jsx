import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating-input-lab" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating-input-lab"
          name="rating-input"
          value={ rating }
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default InputRating;
