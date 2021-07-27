import React from 'react';
import propTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: propTypes.number.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default AddRating;
