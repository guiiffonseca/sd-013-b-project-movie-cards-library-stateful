import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const {
      rating,
      handleChange,
    } = this.props;

    return (
      <section className="rating-form">
        <label data-testid="rating-input-label" htmlFor="rating">
          Avaliação:
          <input
            type="number"
            id="rating"
            value={ rating }
            data-testid="rating-input"
            onChange={ handleChange }
          />
        </label>
      </section>
    );
  }
}

AddMovieRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddMovieRating;
