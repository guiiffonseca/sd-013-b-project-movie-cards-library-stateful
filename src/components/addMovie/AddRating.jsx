import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { rating, onChange } = this.props;
    return (
      <label
        htmlFor="add-movie-rating"
        data-testid="rating-input-label"
      >
        Avaliação:
        <input
          id="add-movie-rating"
          className="search-field"
          data-testid="rating-input"
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          value={ rating }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddRating;
