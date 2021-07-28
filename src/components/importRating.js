import React from 'react';
import PropTypes from 'prop-types';

export default class InportRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          value={ rating }
          name="rating"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InportRating.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
