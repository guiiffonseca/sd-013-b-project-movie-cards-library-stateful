import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { state, evento } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          value={ state }
          onChange={ evento }
          name="rating"
          type="number"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

Rating.propTypes = {
  state: PropTypes.string,
  evento: PropTypes.func,
};

Rating.defaultProps = {
  state: '',
  evento: undefined,
};

export default Rating;
