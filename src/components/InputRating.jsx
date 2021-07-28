import React from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating-input"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
};
