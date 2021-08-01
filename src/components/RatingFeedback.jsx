import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RatingFeedback extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>{rating}</div>
    );
  }
}

RatingFeedback.propTypes = {
  rating: PropTypes.number.isRequired,
};
