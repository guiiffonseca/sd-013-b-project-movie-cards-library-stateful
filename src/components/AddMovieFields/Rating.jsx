import React from 'react';
import PropTypes from 'prop-types';
import Input from '../formFields/Input';

class Rating extends React.Component {
  render() {
    const { value, change } = this.props;

    return (
      <Input
        labelId="rating-input-label"
        txt="Avaliação"
        testId="rating-input"
        id="rating"
        type="number"
        value={ value }
        onChange={ change }
      />
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export default Rating;
