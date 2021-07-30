import React from 'react';
// import PropTypes from 'prop-types';

export default class InputRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 };
  }

  handleChange = ({ target }) => {
    this.setState({ rating: target.value });
  }

  render() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          id="rating"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
          min="0"
          max="5"
        />
      </label>
    );
  }
}

// InputRating.propTypes = {
//   rating: PropTypes.number.isRequired,
// };
