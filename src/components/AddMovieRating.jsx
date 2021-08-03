import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { value: rating, onChange: handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          min="0"
          max="5"
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddMovieRating;
