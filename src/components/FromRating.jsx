import React from 'react';
import PropTypes from 'prop-types';

class FromRating extends React.Component {
  render() {
    const { valor, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ valor }
          onChange={ handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

FromRating.propTypes = {
  valor: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default FromRating;
