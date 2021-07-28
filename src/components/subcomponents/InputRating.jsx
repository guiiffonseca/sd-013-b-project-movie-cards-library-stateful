import React from 'react';
import PropTypes from 'prop-types';
// import { tsConstructorType } from '@babel/types';

class InputRating extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     rating: 0,
  //   };
  // }

  render() {
    const { onChange, rating } = this.props;
    console.log(onChange);
    // const { rating } = this.state;
    return (
      <label htmlFor="e" data-testid="rating-input-label">
        Avaliação
        <input
          value={ rating }
          type="text"
          name="rating"
          id="e"
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
