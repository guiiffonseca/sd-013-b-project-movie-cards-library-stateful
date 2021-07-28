import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { props } = this;
    const { rating } = props;
    return (
      <div className="rating">
        {rating}
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
