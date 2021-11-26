import React from 'react';
import PropTypes from 'prop-types';

export default class AddRating extends React.Component {
  render() {
    const { handleChange, rating } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
};
