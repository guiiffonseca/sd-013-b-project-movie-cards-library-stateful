import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { handle, inputValue, name } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="ratingInput">
        Avaliação
        <input
          data-testid="rating-input"
          type="number"
          min={ 0 }
          max={ 5 }
          value={ inputValue || 0 }
          onChange={ handle }
          name={ name }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  handle: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Rating;
