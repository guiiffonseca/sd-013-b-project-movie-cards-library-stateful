import React from 'react';
import PropTypes from 'prop-types';

class NewRating extends React.Component {
  render() {
    const { rating, OnChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ rating }
          onChange={ OnChange }
        />
      </label>
    );
  }
}

NewRating.propTypes = {
  rating: PropTypes.number,
  Onchange: PropTypes.func,
}.isRequired;

export default NewRating;
